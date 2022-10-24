import { Component, OnInit } from "@angular/core";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";

@Component({
	selector: "app-modal-download",
	templateUrl: "./modal-download.component.html",
	styleUrls: ["./modal-download.component.scss"],
})
export class ModalDownloadComponent implements OnInit {
	SVG = BACKPACK_HI.enums.svg;
	constructor() {}
	ngOnInit(): void {}
}
