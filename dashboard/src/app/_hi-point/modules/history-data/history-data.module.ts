import { BACKPACK_HI } from "../../shared/backpack.class";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlockCo2ChartComponent } from "./blocks/block-co2-chart/block-co2-chart.component";
import { BlockSearchGroupComponent } from "./blocks/block-search-group/block-search-group.component";
import { BlockTempChartComponent } from "./blocks/block-temp-chart/block-temp-chart.component";
import { PageHistoryData1Component } from "./pages/page-history-data1/page-history-data1.component";
import { BlockSoilChartComponent } from "./blocks/block-soil-chart/block-soil-chart.component";
import { BlockCustomChartComponent } from "./blocks/block-custom-chart/block-custom-chart.component";

@NgModule({
	declarations: [
		BlockSearchGroupComponent,
		BlockTempChartComponent,
		BlockCo2ChartComponent,
		PageHistoryData1Component,
		BlockSoilChartComponent,
		BlockCustomChartComponent,
	],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class HistoryDataModule {}
