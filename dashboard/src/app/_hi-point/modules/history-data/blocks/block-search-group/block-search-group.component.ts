import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-block-search-group",
	templateUrl: "./block-search-group.component.html",
	styleUrls: ["./block-search-group.component.scss"],
})
export class BlockSearchGroupComponent implements OnInit {
	svg = BACKPACK_HI.enums.svg;
	tagList = ["Group03-環境設備A1", "Group01-環境設備D2", "Group03-環境設備A2"];
	constructor() {}

	ngOnInit(): void {}
}
