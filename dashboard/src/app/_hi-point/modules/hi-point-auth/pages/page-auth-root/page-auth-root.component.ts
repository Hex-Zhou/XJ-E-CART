import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "<body[root]>",
	templateUrl: "./page-auth-root.component.html",
	styleUrls: ["./page-auth-root.component.scss"],
})
export class PageAuthRootComponent implements OnInit, OnDestroy {
	mode: "center" | "end" = "end";
	bp = BACKPACK_HI;
	picList = BACKPACK_HI.enums.pic;
	today: Date = new Date();
	constructor() {}
	ngOnInit(): void {
		document.body.classList.add("bg-white");
	}
	ngOnDestroy() {
		document.body.classList.remove("bg-white");
	}
}
