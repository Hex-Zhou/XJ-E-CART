import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-card-chart-nav",
	templateUrl: "./card-chart-nav.component.html",
	styleUrls: ["./card-chart-nav.component.scss"],
})
export class CardChartNavComponent implements OnInit {
	SVG = BACKPACK_HI.enums.svg;
	currentChartTime: 3 | 7 | 24 = 24;
	@Input() isDownload = false;
	@Output() ClickTime = new EventEmitter<3 | 7 | 24>();
	@Output() ClickDownload = new EventEmitter<any>();
	constructor() {}
	ngOnInit(): void {}
	// * * * * *  * * * * *
	timeClick(val: 3 | 7 | 24) {
		this.currentChartTime = val;
		this.ClickTime.emit(val);
	}
	downloadClick() {
		this.ClickDownload.emit();
	}
}
