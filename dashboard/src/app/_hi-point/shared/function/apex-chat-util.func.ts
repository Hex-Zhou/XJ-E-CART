import { ApexOptions } from "ng-apexcharts";

function randomTime(baseVal: any, count: any, yearRange: any) {
 var i = 0;
 var series: any = [];
 while (i < count) {
  var x = baseVal;
  var y = Math.floor(Math.random() * (yearRange.max - yearRange.min + 1)) + yearRange.min;
  series.push([x, y]);
  baseVal += 86400000;
  i++;
 }
 return series;
}
function webWorkFunc(func: any) {
 if (typeof Worker !== "undefined") {
  const worker = new Worker(new URL("../../../web-worker.worker.ts", import.meta.url));
  worker.onmessage = ({ data }) => {
   func();
   worker.terminate();
  };
  worker.postMessage("web-work  worker!");
  worker.addEventListener("error", e => {
   console.log(`web work錯誤`, e.error);
  });
 } else {
  func();
 }
}
function createYaxis(opposite: boolean, color: string, titleText: string, formatString: string = "") {
 let result = {
  tickAmount: 6,
  opposite: opposite,
  axisBorder: {
   show: true,
   color: color,
  },
  labels: {
   formatter: (val: number): string => `${val | 0} ${formatString}`,
   offsetX: -16,
   style: { fontSize: "16px", fontWeight: 400, colors: color },
  },
  title: {
   offsetX: 16,
   text: titleText,
   rotate: -0,
   style: { fontSize: "16px", fontWeight: 400, color: color },
  },
 };
 return Object.assign({}, result);
}
function createSeries(name: string, type: "column" | "line" = "line", time = 365, min = 0, max = 100) {
 return {
  name: name,
  type: type,
  data: randomTime(new Date("1 Jan 2022").getTime(), time, {
   min: min,
   max: max,
  }),
 };
}
function createDemoChart2(id: string, targetID: string): Partial<ApexOptions> {
 return {
  series: [
   {
    name: "series1",
    data: randomTime(new Date("01 Jan 2022").getTime(), 365, {
     min: 30,
     max: 90,
    }),
   },
  ] as any,
  chart: {
   id: id,
   height: 130,
   type: "area",
   brush: {
    target: targetID,
    enabled: true,
   },
   selection: {
    enabled: true,
    xaxis: {
     min: new Date("2022-05-01").getTime(),
     max: new Date("2022-05-30").getTime(),
    },
   },
  },
  colors: ["#008FFB"],

  xaxis: {
   type: "datetime",
   tooltip: {
    enabled: false,
   },
  },
  yaxis: {
   tickAmount: 2,
  },
 };
}
function addDefaultConfig() {
 return {
  stroke: {
   width: 3,
  },
  dataLabels: {
   enabled: false,
  },
  markers: {
   size: 5,
  },
  xaxis: {
   type: "datetime",
  },
  legend: { show: false },
 };
}
export const apexUtil = {
 randomTime,
 createYaxis,
 createSeries,
 createDemoChart2,
 webWorkFunc,
 addDefaultConfig,
};
