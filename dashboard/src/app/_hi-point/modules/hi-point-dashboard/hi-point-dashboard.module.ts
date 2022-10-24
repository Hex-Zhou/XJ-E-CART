import { BACKPACK_HI } from "../../shared/backpack.class";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlockDevicesStatusChartComponent } from "./blocks/block-devices-status-chart/block-devices-status-chart.component";
import { BlockNewestPhotosComponent } from "./blocks/block-newest-photos/block-newest-photos.component";
import { BlockSensorCardGroupComponent } from "./blocks/block-sensor-card-group/block-sensor-card-group.component";
import { BlockTabGroupComponent } from "./blocks/block-tab-group/block-tab-group.component";
import { BlockTrendChartComponent } from "./blocks/block-trend-chart/block-trend-chart.component";
import { BlockWarningInfoComponent } from "./blocks/block-warning-info/block-warning-info.component";
import { PageDashboard1Component } from "./pages/page-dashboard1/page-dashboard1.component";
import { BlockWarningContentComponent } from "./blocks/block-warning-content/block-warning-content.component";
import { SensorCardApexChartComponent } from "./blocks/block-sensor-card-group/components/sensor-card-apex-chart/sensor-card-apex-chart.component";
import { SensorCardComponent } from "./blocks/block-sensor-card-group/components/sensor-card/sensor-card.component";
import { ModalExceptionComponent } from "./blocks/block-warning-content/components/modal-exception/modal-exception.component";
// import { BlockWarningGroupPanelComponent } from './blocks/block-warning-group-panel/block-warning-group-panel.component';

@NgModule({
	declarations: [
		PageDashboard1Component,
		BlockTabGroupComponent,
		BlockDevicesStatusChartComponent,
		BlockWarningInfoComponent,
		BlockTrendChartComponent,
		BlockNewestPhotosComponent,
		BlockSensorCardGroupComponent,
		BlockWarningContentComponent,
		SensorCardComponent,
		SensorCardApexChartComponent,
		ModalExceptionComponent,
		// BlockWarningGroupPanelComponent,
	],
	imports: [CommonModule, BACKPACK_HI.commonModules],
	exports: [],
})
export class HiPointDashboardModule {}
