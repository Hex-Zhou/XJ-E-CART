import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-page-help",
	templateUrl: "./page-help.component.html",
	styleUrls: ["./page-help.component.scss"],
})
export class PageHelpComponent implements OnInit {
	dataList = fakeDataList;
	constructor() {}

	ngOnInit(): void {}
}
const svg = BACKPACK_HI.enums.svg;
const fakeDataList: iData[] = [
	{
		title: "系統操作說明書",
		label: "點我下載",
		icon: svg.cloud1,
	},
	{
		title: "故障排除手冊",
		label: "點我下載",
		icon: svg.cloud1,
	},
	{
		title: "聯絡資訊",
		label: "詳細資料",
		icon: svg.gallery,
	},
];
interface iData {
	title: string;
	label: string;
	icon: string;
}
