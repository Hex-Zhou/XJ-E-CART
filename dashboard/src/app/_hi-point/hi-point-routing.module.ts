import { PageErrReportComponent } from "./modules/err-report/pages/page-err-report/page-err-report.component";
import { PageAgentComponent } from "./modules/agent/pages/page-agent/page-agent.component";
import { PageSvgComponent } from "./modules/dev/pages/page-svg/page-svg.component";
import { PageGroupSetting1Component } from "./modules/group-setting/pages/page-group-setting1/page-group-setting1.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAccountManagement1Component } from "./modules/account-management/pages/page-account-management1/page-account-management1.component";
import { PageControlSetting1Component } from "./modules/control-setting/pages/page-control-setting1/page-control-setting1.component";
import { PageHelpComponent } from "./modules/help/pages/page-help/page-help.component";
import { PageDashboard1Component } from "./modules/hi-point-dashboard/pages/page-dashboard1/page-dashboard1.component";
import { HiPointRoutesComponent } from "./modules/hi-point-layout/hi-point-routes/hi-point-routes.component";
import { PageHistoryData1Component } from "./modules/history-data/pages/page-history-data1/page-history-data1.component";
import { PageImageData1Component } from "./modules/image-data/pages/page-image-data1/page-image-data1.component";
const routes: Routes = [
 {
  path: "",
  component: HiPointRoutesComponent,
  children: [
   { path: "group-setting", component: PageGroupSetting1Component },
   { path: "dashboard", component: PageDashboard1Component },
   { path: "account-management", component: PageAccountManagement1Component },
   { path: "control-setting", component: PageControlSetting1Component },
   { path: "history-data", component: PageHistoryData1Component },
   { path: "image-data", component: PageImageData1Component },
   { path: "help", component: PageHelpComponent },
   { path: "agent", component: PageAgentComponent },
   { path: "err-report", component: PageErrReportComponent },
   { path: "dev", children: [{ path: "svg", component: PageSvgComponent }] },
   { path: "", pathMatch: "full", redirectTo: "dashboard" },
  ],
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class HiPointRoutingModule {}
