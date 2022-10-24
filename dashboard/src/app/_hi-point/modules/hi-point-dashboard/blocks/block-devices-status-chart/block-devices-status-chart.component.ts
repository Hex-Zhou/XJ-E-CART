import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { ApexAxisChartSeries, ApexOptions } from "ng-apexcharts";
import { Component, OnInit } from "@angular/core";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";

@Component({
	selector: "app-block-devices-status-chart",
	templateUrl: "./block-devices-status-chart.component.html",
	styleUrls: ["./block-devices-status-chart.component.scss"],
})
export class BlockDevicesStatusChartComponent implements OnInit {
	chartOptions: any = {};

	constructor() {}

	ngOnInit(): void {
		this.chartOptions = getChartOptions();
	}
}

function getChartOptions() {
	const baseColor = getCSSVariableValue("--bs-info");
	const dangerColor = BACKPACK_HI.getColor("danger");
	const primaryColor = BACKPACK_HI.getColor("primary");

	const chartOpt: Partial<ApexOptions> = {
		series: [80, 20],
		chart: {
			fontFamily: "inherit",
			type: "donut",
			height: 350,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: "solid",
			opacity: 1,
		},

		states: {
			normal: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			hover: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: "none",
					value: 0,
				},
			},
		},
		tooltip: {
			style: {
				fontSize: "12px",
			},
			y: {
				formatter: function (val: number) {
					return +val + " %";
				},
			},
		},
		colors: [primaryColor, dangerColor],

		markers: {
			strokeColors: baseColor,
			strokeWidth: 3,
		},
		responsive: [
			{
				breakpoint: 576,
				options: {
					chart: {
						height: 250,
					},
				},
			},
		],
	};
	return chartOpt;
}
