import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ApexOptions } from "ng-apexcharts";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";

@Component({
	selector: "app-block-custom-chart",
	templateUrl: "./block-custom-chart.component.html",
	styleUrls: ["./block-custom-chart.component.scss"],
})
export class BlockCustomChartComponent implements OnInit {
	@Input() isWebWork = false;
	chartOptions1: Partial<ApexOptions> = {};
	chartOptions2: Partial<ApexOptions> = {};
	isDone = false;
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit(): void {
		// * * * * * 1 * * * * *
		const wb = () => {
			const dangerColor = BACKPACK_HI.getColor("danger");
			const successColor = BACKPACK_HI.getColor("success");
			const primaryColor = BACKPACK_HI.getColor("primary");
			let createYaxis = BACKPACK_HI.apexUtil.createYaxis;
			let createSeries = BACKPACK_HI.apexUtil.createSeries;
			const opt1x: Partial<ApexOptions> = {
				series: [createSeries("側項A"), createSeries("側項B", "column"), createSeries("側項C")] as any,
				chart: {
					id: "customChart1",
					type: "line",
					height: 350,
					toolbar: {
						autoSelected: "pan",
						show: false,
					},
				},
				colors: [dangerColor, successColor, primaryColor],
				yaxis: [
					createYaxis(false, dangerColor, "側項A", ""),
					createYaxis(true, successColor, "側項B", ""),
					createYaxis(true, primaryColor, "側項C", ""),
				],
			};
			const opt1: any = { ...opt1x, ...BACKPACK_HI.apexUtil.addDefaultConfig() };
			// * * * * * 2 * * * * *
			const opt2 = BACKPACK_HI.apexUtil.createDemoChart2("customChart2", "customChart1");
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
