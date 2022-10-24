import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-block-warning-info",
  templateUrl: "./block-warning-info.component.html",
  styleUrls: ["./block-warning-info.component.scss"],
})
export class BlockWarningInfoComponent implements OnInit {
  dataList: iData[] = fakeDataList;
  constructor() {}
  ngOnInit(): void {}
}
interface iData {
  name: string;
  val: number;
}
const fakeDataList: iData[] = [
  {
    name: "溫度",
    val: 14,
  },
  {
    name: "濕度",
    val: 12,
  },
  {
    name: "店員異常",
    val: 8,
  },
  {
    name: "門沒關",
    val: 4,
  },
  {
    name: "缺水",
    val: 2,
  },
];
