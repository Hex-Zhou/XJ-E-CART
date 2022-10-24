import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from "@angular/core";
import { ApexOptions } from "ng-apexcharts";
import { BACKPACK_HI } from "../../../../shared/backpack.class";
@Component({
	selector: "app-block-temp-chart",
	templateUrl: "./block-temp-chart.component.html",
	styleUrls: ["./block-temp-chart.component.scss"],
})
export class BlockTempChartComponent implements OnInit {
	@Input() isWebWork = false;
	chartOptions1: Partial<ApexOptions> = {};
	chartOptions2: Partial<ApexOptions> = {};
	isDone = false;
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit(): void {
		const wb = () => {
			const dangerColor = BACKPACK_HI.getColor("danger");
			const successColor = BACKPACK_HI.getColor("success");
			let createYaxis = BACKPACK_HI.apexUtil.createYaxis;
			let createSeries = BACKPACK_HI.apexUtil.createSeries;
			// * * * * * 1 * * * * *
			const opt1x: Partial<ApexOptions> = {
				series: [createSeries("溫度"), createSeries("濕度")] as any,
				chart: {
					id: "tempChart1",
					type: "line",
					height: 350,
					toolbar: {
						autoSelected: "pan",
						show: false,
					},
				},
				colors: [successColor, dangerColor],
				yaxis: [createYaxis(false, successColor, "溫度", "C"), createYaxis(true, dangerColor, "濕度", "%")],
			};
			const opt1: any = { ...opt1x, ...BACKPACK_HI.apexUtil.addDefaultConfig() };
			// * * * * * 2 * * * * *
			const opt2 = BACKPACK_HI.apexUtil.createDemoChart2("tempChart2", "tempChart1");
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
