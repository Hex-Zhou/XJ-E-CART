import { ApexOptions } from "ng-apexcharts";
import { Component, OnInit } from "@angular/core";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";

@Component({
  selector: "app-block-trend-chart",
  templateUrl: "./block-trend-chart.component.html",
  styleUrls: ["./block-trend-chart.component.scss"],
})
export class BlockTrendChartComponent implements OnInit {
  currentChartTime: 24 | 3 | 7 = 24;
  chartOptions: any = {};
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions("325px", "primary");
  }
}
function getChartOptions(chartHeight: string, chartColor: string) {
  const labelColor = getCSSVariableValue("--bs-gray-800");
  const strokeColor = getCSSVariableValue("--bs-gray-300");
  const baseColor = getCSSVariableValue("--bs-" + chartColor);
  const lightColor = getCSSVariableValue("--bs-light-" + chartColor);
  const option: Partial<ApexOptions> = {
    grid: {
      show: true,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    series: [
      {
        name: "Net Profit",
        data: [30, 30, 60, 25, 25, 40, 60, 9, 40, 15, 55],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
      type: "gradient",
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.375,
        stops: [25, 50, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      range: 4,
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 65,
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      tickAmount: 4,
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
          return "$" + val + " thousands";
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  };
  return option;
}
