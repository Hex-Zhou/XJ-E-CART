import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BACKPACK } from "./../../shared/backpack.class";
import { HexDashboardComponent } from "./hex-dashboard.component";
import { BlockNavEditorComponent } from './components/block-nav-editor/block-nav-editor.component';
@NgModule({
	declarations: [HexDashboardComponent, BlockNavEditorComponent],
	imports: [CommonModule, BACKPACK.commonModules],
})
export class HexDashboardModule {}
