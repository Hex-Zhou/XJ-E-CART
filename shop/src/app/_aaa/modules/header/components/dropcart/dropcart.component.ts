import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CartItem } from "src/app/shared/interfaces/cart-item";
import { CartService } from "src/app/shared/services/cart.service";
import { OffcanvasCartService } from "src/app/shared/services/offcanvas-cart.service";
import { RootService } from "src/app/shared/services/root.service";
export type DropcartType = "dropdown" | "offcanvas";
@Component({
  selector: "app-header-dropcart",
  templateUrl: "./dropcart.component.html",
  styleUrls: ["./dropcart.component.scss"],
})
export class DropcartComponent {
  removedItems: CartItem[] = [];
  @Input() type: DropcartType = "dropdown";
  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    public state: OffcanvasCartService,
    public cart: CartService,
    public root: RootService
  ) {}
  remove(item: CartItem): void {
    if (this.removedItems.includes(item)) {
      return;
    }
    this.removedItems.push(item);
    this.cart.remove(item).subscribe({
      complete: () => (this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)),
    });
  }
  close(): void {
    this.state.close();
  }
}
