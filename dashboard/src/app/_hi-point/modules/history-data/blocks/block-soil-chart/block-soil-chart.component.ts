import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from "@angular/core";
import { ApexOptions } from "ng-apexcharts";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";

@Component({
	selector: "app-block-soil-chart",
	templateUrl: "./block-soil-chart.component.html",
	styleUrls: ["./block-soil-chart.component.scss"],
})
export class BlockSoilChartComponent implements OnInit {
	@Input() isWebWork = false;
	chartOptions1: Partial<ApexOptions> = {};
	chartOptions2: Partial<ApexOptions> = {};
	isDone = false;
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit(): void {
		const wb = () => {
			const dangerColor = BACKPACK_HI.getColor("danger");
			const successColor = BACKPACK_HI.getColor("success");
			const primaryColor = BACKPACK_HI.getColor("primary");
			let createYaxis = BACKPACK_HI.apexUtil.createYaxis;
			let createSeries = BACKPACK_HI.apexUtil.createSeries;
			// * * * * * 1 * * * * *
			const opt1x: Partial<ApexOptions> = {
				series: [createSeries("土壤溫度"), createSeries("土壤含水率", "column"), createSeries("土壤電導度")] as any,
				chart: {
					id: "soliChart1",
					type: "line",
					height: 350,
					toolbar: {
						autoSelected: "pan",
						show: false,
					},
				},
				colors: [dangerColor, successColor, primaryColor],
				yaxis: [
					createYaxis(false, dangerColor, "土壤溫度", "C"),
					createYaxis(true, successColor, "土壤含水率", "mS/cm"),
					createYaxis(true, primaryColor, "土壤電導度", "%"),
				],
			};
			const opt1: any = { ...opt1x, ...BACKPACK_HI.apexUtil.addDefaultConfig() };
			// * * * * * 2 * * * * *
			const opt2 = BACKPACK_HI.apexUtil.createDemoChart2("soliChart2", "soliChart1");
			this.chartOptions1 = opt1;
			this.chartOptions2 = opt2;
			this.isDone = true;
			this.cdr.detectChanges();
		};
		this.isWebWork ? BACKPACK_HI.apexUtil.webWorkFunc(wb) : wb();
	}
}
// * * * * *  * * * * *

// * * * * *  * * * * *
