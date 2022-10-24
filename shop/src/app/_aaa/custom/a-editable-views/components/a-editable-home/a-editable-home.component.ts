import { Component, OnDestroy, OnInit } from "@angular/core";
import { merge, Observable, Subject, takeUntil, tap } from "rxjs";
import { ShopService } from "src/app/shared/api/shop.service";
import { BlockHeaderGroup } from "src/app/shared/interfaces/block-header-group";
import { Brand } from "src/app/shared/interfaces/brand";
import { Category } from "src/app/shared/interfaces/category";
import { Product } from "src/app/shared/interfaces/product";
import { posts } from "src/data/blog-posts";
import { iiEditHomeEntity } from "../../../../shared/models/edit-home.model";
import { EditHomeService } from "./../../../../shared/services/edit-home.service";

@Component({
  selector: "app-a-editable-home",
  templateUrl: "./a-editable-home.component.html",
  styleUrls: ["./a-editable-home.component.scss"],
})
export class AEditableHomeComponent implements OnInit, OnDestroy {
  // * * * * * custom * * * * *
  nowEntity: iiEditHomeEntity[] = [];
  // * * * * * official * * * * *
  destroy$: Subject<void> = new Subject<void>();
  bestsellers$!: Observable<Product[]>;
  brands$!: Observable<Brand[]>;
  popularCategories$!: Observable<Category[]>;
  columnTopRated$!: Observable<Product[]>;
  columnSpecialOffers$!: Observable<Product[]>;
  columnBestsellers$!: Observable<Product[]>;
  posts = posts;
  featuredProducts!: ProductsCarouselData;
  latestProducts!: ProductsCarouselData;
  // * * * * * life * * * * *
  constructor(private shop: ShopService, private editHomeServ: EditHomeService) {
    this.watchSort();
    this.watchEntity();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.bestsellers$ = this.shop.getBestsellers(7);
    this.brands$ = this.shop.getPopularBrands();
    this.popularCategories$ = this.shop.getCategoriesBySlug(
      [
        "power-tools",
        "hand-tools",
        "machine-tools",
        "power-machinery",
        "measurement",
        "clothes-and-ppe",
      ],
      1
    );
    this.columnTopRated$ = this.shop.getTopRated(3);
    this.columnSpecialOffers$ = this.shop.getSpecialOffers(3);
    this.columnBestsellers$ = this.shop.getBestsellers(3);
    this.featuredProducts = {
      abort$: new Subject<void>(),
      loading: false,
      products: [],
      groups: [
        {
          name: "All",
          current: true,
          products$: this.shop.getFeaturedProducts(null, 10),
        },
        {
          name: "Power Tools",
          current: false,
          products$: this.shop.getFeaturedProducts("power-tools", 10),
        },
        {
          name: "Hand Tools",
          current: false,
          products$: this.shop.getFeaturedProducts("hand-tools", 10),
        },
        {
          name: "Plumbing",
          current: false,
          products$: this.shop.getFeaturedProducts("plumbing", 10),
        },
      ],
    };
    this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);
    this.latestProducts = {
      abort$: new Subject<void>(),
      loading: false,
      products: [],
      groups: [
        {
          name: "All",
          current: true,
          products$: this.shop.getLatestProducts(null, 8),
        },
        {
          name: "Power Tools",
          current: false,
          products$: this.shop.getLatestProducts("power-tools", 8),
        },
        {
          name: "Hand Tools",
          current: false,
          products$: this.shop.getLatestProducts("hand-tools", 8),
        },
        {
          name: "Plumbing",
          current: false,
          products$: this.shop.getLatestProducts("plumbing", 8),
        },
      ],
    };
    this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
  }
  // * * * * * public * * * * *
  groupChange(carousel: ProductsCarouselData, group: BlockHeaderGroup): void {
    carousel.loading = true;
    carousel.abort$.next();
    (group as ProductsCarouselGroup).products$
      .pipe(
        tap(() => (carousel.loading = false)),
        takeUntil(merge(this.destroy$, carousel.abort$))
      )
      .subscribe(x => (carousel.products = x));
  }
  // * * * * * custom * * * * *
  watchEntity() {
    this.editHomeServ
      .entity$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(_ => {
        this.nowEntity = this.editHomeServ.getEntityBySort();
      });
  }
  watchSort() {
    this.editHomeServ
      .sort$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(_ => {
        this.nowEntity = this.editHomeServ.getEntityBySort();
      });
  }
}
interface ProductsCarouselGroup extends BlockHeaderGroup {
  products$: Observable<Product[]>;
}
interface ProductsCarouselData {
  abort$: Subject<void>;
  loading: boolean;
  products: Product[];
  groups: ProductsCarouselGroup[];
}
