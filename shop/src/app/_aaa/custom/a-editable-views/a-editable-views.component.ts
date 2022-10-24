import { DropcartType } from "./../../modules/header/components/dropcart/dropcart.component";
import { EditViewService } from "./../../shared/services/edit-view.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Subscription } from "rxjs";
import { iiLayoutBase } from "../../shared/models/layout-setting.model";
import { EditHeaderService } from "../../shared/services/edit-header.service";

@Component({
  selector: "app-a-editable-views",
  templateUrl: "./a-editable-views.component.html",
  styleUrls: ["./a-editable-views.component.scss"],
})
export class AEditableViewsComponent implements OnInit, OnDestroy {
  sb = new Subscription();
  nowEdit: string = "";
  dropcartType: DropcartType = "offcanvas";
  headerLayout: "classic" | "compact" = "classic";
  isLoad = true;
  // * * * * * life * * * * *
  constructor(
    public route: ActivatedRoute,
    private viewServ: EditViewService,
    private headServ: EditHeaderService
  ) {
    // this.route.data.pipe(map(r => r["data"])).subscribe((data: Partial<iiLayoutBase>) => {
    //   this.headerLayout = data.headerLayout || "classic";
    //   this.dropcartType = data.dropcartType || "dropdown";
    // });
  }
  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
  ngOnInit(): void {
    this.initNowView();
    this.initHeader();
  }
  // * * * * * init * * * * *
  initNowView() {
    const $ = this.viewServ.getEdit$().subscribe(result => {
      if (result !== "header") this.nowEdit = result;
    });
    this.sb.add($);
  }
  initHeader() {
    const $ = this.headServ.getState$().subscribe(result => {
      [this.dropcartType, this.headerLayout] = [result.dropcartType, result.headerLayout];
    });
    this.sb.add($);
  }
}
