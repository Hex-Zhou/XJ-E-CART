import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageGroupSetting1Component } from "./pages/page-group-setting1/page-group-setting1.component";
import { BlockGroupTableComponent } from "./blocks/block-group-table/block-group-table.component";
import {
	BlockGroupCardsGroupComponent,
	GroupCardItemComponent,
} from "./blocks/block-group-cards-group/block-group-cards-group.component";

@NgModule({
	declarations: [
		PageGroupSetting1Component,
		BlockGroupTableComponent,
		BlockGroupCardsGroupComponent,
		GroupCardItemComponent,
	],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class GroupSettingModule {}
