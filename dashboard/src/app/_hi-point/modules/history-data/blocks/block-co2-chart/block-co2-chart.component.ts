import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from "@angular/core";
import { ApexOptions } from "ng-apexcharts";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";

@Component({
	selector: "app-block-co2-chart",
	templateUrl: "./block-co2-chart.component.html",
	styleUrls: ["./block-co2-chart.component.scss"],
})
export class BlockCo2ChartComponent implements OnInit {
	@Input() isWebWork = false;
	chartOptions1: Partial<ApexOptions> = {};
	chartOptions2: Partial<ApexOptions> = {};
	isDone = false;
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit(): void {
		const wb = () => {
			const successColor = BACKPACK_HI.getColor("success");
			let createYaxis = BACKPACK_HI.apexUtil.createYaxis;
			let createSeries = BACKPACK_HI.apexUtil.createSeries;
			// * * * * * 1 * * * * *
			const opt1x: Partial<ApexOptions> = {
				series: [createSeries("CO2")] as any,
				chart: {
					id: "co2Chart1",
					type: "line",
					height: 350,
					toolbar: {
						autoSelected: "pan",
						show: false,
					},
				},
				colors: [successColor],
				yaxis: [createYaxis(false, successColor, "CO2", "ppm")],
			};
			const opt1: any = { ...opt1x, ...BACKPACK_HI.apexUtil.addDefaultConfig() };
			// * * * * * 2 * * * * *
			const opt2 = BACKPACK_HI.apexUtil.createDemoChart2("co2Chart2", "co2Chart1");
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
