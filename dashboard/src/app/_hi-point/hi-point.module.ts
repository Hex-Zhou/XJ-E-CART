import { ErrReportModule } from "./modules/err-report/err-report.module";
import { HexGrayViewListModule } from "./shared/theme/hex-gray-view-list/hex-gray-view-list.module";
import { AgentModule } from "./modules/agent/agent.module";
import { GroupSettingModule } from "./modules/group-setting/group-setting.module";
import { DevModule } from "./modules/dev/dev.module";
import { ImageDataModule } from "./modules/image-data/image-data.module";
import { HistoryDataModule } from "./modules/history-data/history-data.module";
import { ControlSettingModule } from "./modules/control-setting/control-setting.module";
import { HelpModule } from "./modules/help/help.module";
import { HiPointAuthModule } from "./modules/hi-point-auth/hi-point-auth.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HiPointRoutingModule } from "./hi-point-routing.module";
import { AccountManagementModule } from "./modules/account-management/account-management.module";
import { HiPointDashboardModule } from "./modules/hi-point-dashboard/hi-point-dashboard.module";

@NgModule({
 declarations: [],
 imports: [
  CommonModule,
  HiPointRoutingModule,
  HiPointDashboardModule,
  AccountManagementModule,
  HiPointAuthModule,
  HelpModule,
  ControlSettingModule,
  HistoryDataModule,
  ImageDataModule,
  DevModule,
  GroupSettingModule,
  GroupSettingModule,
  AgentModule,
  HexGrayViewListModule,
  ErrReportModule,
 ],
})
export class HiPointModule {}
