import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-block-live-streaming",
	templateUrl: "./block-live-streaming.component.html",
	styleUrls: ["./block-live-streaming.component.scss"],
})
export class BlockLiveStreamingComponent implements OnInit {
	IMG = BACKPACK_HI.enums.pic;
	SVG = BACKPACK_HI.enums.svg;
	constructor() {}

	ngOnInit(): void {}
}
