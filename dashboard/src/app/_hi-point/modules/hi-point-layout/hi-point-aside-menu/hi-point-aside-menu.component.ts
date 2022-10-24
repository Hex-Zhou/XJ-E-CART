import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";

@Component({
	selector: "app-hi-point-aside-menu",
	templateUrl: "./hi-point-aside-menu.component.html",
	styleUrls: ["./hi-point-aside-menu.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class HiPointAsideMenuComponent implements OnInit {
	routeList = BACKPACK_HI.data.routeList;

	constructor() {}

	ngOnInit(): void {}
}
