import { HexDashboardModule } from "./views/hex-dashboard/hex-dashboard.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HexRoutingModule } from "./hex-routing.module";

@NgModule({
	declarations: [],
	imports: [CommonModule, HexRoutingModule, HexDashboardModule],
})
export class HexModule {}
