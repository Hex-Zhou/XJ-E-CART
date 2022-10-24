import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-page-svg",
	templateUrl: "./page-svg.component.html",
	styleUrls: ["./page-svg.component.scss"],
})
export class PageSvgComponent implements OnInit {
	SVG = Object.entries(BACKPACK_HI.enums.svg);
	PIC = Object.entries(BACKPACK_HI.enums.pic);
	constructor() {}
	ngOnInit(): void {}
}
