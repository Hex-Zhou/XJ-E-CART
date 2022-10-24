import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-page-history-data1",
 templateUrl: "./page-history-data1.component.html",
 styleUrls: ["./page-history-data1.component.scss"],
})
export class PageHistoryData1Component implements OnInit {
 isWebWork = true; //嚴重影響chart效能 可以試試看 開啟與關閉的生成表單速度
 constructor() {}

 ngOnInit(): void {}
}
