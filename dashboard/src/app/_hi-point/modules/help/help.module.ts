import { BACKPACK_HI } from "../../shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageHelpComponent } from "./pages/page-help/page-help.component";

@NgModule({
	declarations: [PageHelpComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class HelpModule {}
