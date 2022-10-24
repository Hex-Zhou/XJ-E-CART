import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg-2";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { SwiperModule } from "swiper/angular";
import { NavTabsGroupComponent } from "./components/nav-tabs-group/nav-tabs-group.component";
import { SkinCardCollapseComponent } from "./components/skin-card-collapse/skin-card-collapse.component";
import { SkinCardStandardComponent } from "./components/skin-card-standard/skin-card-standard.component";
import { HexBtnStyleDirective } from "./directives/hex-btn-style.directive";
import { CardChartNavComponent } from "./components/card-chart-nav/card-chart-nav.component";

@NgModule({
 declarations: [
  SkinCardStandardComponent,
  NavTabsGroupComponent,
  SkinCardCollapseComponent,
  HexBtnStyleDirective,
  CardChartNavComponent,
 ],
 imports: [
  CommonModule,
  RouterModule,
  InlineSVGModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  NgApexchartsModule,
  SwiperModule,
  NzSelectModule,
  NzInputModule,
  NzIconModule,
 ],
 exports: [
  SkinCardStandardComponent,
  NavTabsGroupComponent,
  HexBtnStyleDirective,
  CardChartNavComponent,
  SkinCardCollapseComponent,
 ],
})
export class HexSharedModule {}
