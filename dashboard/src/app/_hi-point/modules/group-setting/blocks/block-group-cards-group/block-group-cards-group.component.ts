import { BACKPACK_HI } from "./../../../../shared/backpack.class";
import { Component, EventEmitter, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-block-group-cards-group",
	templateUrl: "./block-group-cards-group.component.html",
	styleUrls: ["./block-group-cards-group.component.scss"],
})
export class BlockGroupCardsGroupComponent implements OnInit {
	SVG = BACKPACK_HI.enums.svg;
	groups = [...fakeGroups, ...fakeGroups];
	constructor() {}
	ngOnInit(): void {}
}
const fakeGroups = ["Group1", "Group2", "Group3", "Group4", "Group5"];
// * * * * *  * * * * *
@Component({
	selector: "app-group-card-item",
	template: `
		<ng-container *ngIf="svg === 'yuBan'">
			<div (click)="closeEvt.emit()" class="x-mark fill-primary fajc">
				<span [inlineSVG]="SVG.xMark" class="svg-icon svg-icon-3"></span>
			</div>
		</ng-container>
		<div class="card border border-dashed border-3 h-175px w-175px">
			<div (click)="clickEvt.emit()" class="card-body fajc flex-column pointer gap-3">
				<span [inlineSVG]="SVG[svg]" class="svg-icon svg-icon-2x"></span>
				<span class="fs-3 fw-bolder">{{ text }}</span>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				position: relative;
			}
			.x-mark {
				position: absolute;
				top: -5px;
				right: -4px;
				z-index: 100;
				background: #fff;
				border-radius: 50%;
				box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.26);
				cursor: pointer;
				padding: 0.3rem;
			}
		`,
	],
})
export class GroupCardItemComponent {
	SVG = BACKPACK_HI.enums.svg;
	@Input() svg: "yuBan" | "addCross";
	@Input() text = "";
	@Input() closeEvt = new EventEmitter();
	@Input() clickEvt = new EventEmitter();
}
