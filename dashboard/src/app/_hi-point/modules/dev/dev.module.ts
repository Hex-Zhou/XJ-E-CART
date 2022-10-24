import { BACKPACK_HI } from "../../shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageSvgComponent } from "./pages/page-svg/page-svg.component";

@NgModule({
	declarations: [PageSvgComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class DevModule {}
