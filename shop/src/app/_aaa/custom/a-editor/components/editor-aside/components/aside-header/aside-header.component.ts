import { Subscription } from "rxjs";
import { EditHeaderService } from "./../../../../../../shared/services/edit-header.service";
import { HeaderService } from "src/app/shared/services/header.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-aside-header",
  templateUrl: "./aside-header.component.html",
  styleUrls: ["./aside-header.component.scss"],
})
export class AsideHeaderComponent implements OnInit, OnDestroy {
  dropcartType: "dropdown" | "offcanvas" = "dropdown";
  headerLayout: "classic" | "compact" = "classic";
  sb = new Subscription();
  constructor(private serv: EditHeaderService) {}
  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
  ngOnInit(): void {}
  // * * * * *  * * * * *
  update(type: string, val: string) {
    const temp: any = { dropcartType: this.dropcartType, headerLayout: this.headerLayout };
    temp[type] = val;
    this.serv.updateState(temp);
  }
  // * * * * *  * * * * *
  watch() {
    const $ = this.serv.getState$().subscribe(result => {
      [this.headerLayout, this.dropcartType] = [result.headerLayout, result.dropcartType];
    });
    this.sb.add($);
  }
}
