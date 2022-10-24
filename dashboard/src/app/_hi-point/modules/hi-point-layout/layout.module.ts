import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { HiPointAsideMenuComponent } from "./hi-point-aside-menu/hi-point-aside-menu.component";
import { HiPointHeaderComponent } from "./hi-point-header/hi-point-header.component";
import { HiPointRoutesComponent } from "./hi-point-routes/hi-point-routes.component";
import { HiPointBreadcrumbComponent } from "./hi-point-breadcrumb/hi-point-breadcrumb.component";

@NgModule({
	declarations: [HiPointAsideMenuComponent, HiPointHeaderComponent, HiPointRoutesComponent, HiPointBreadcrumbComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
	exports: [HiPointAsideMenuComponent, HiPointHeaderComponent],
})
export class HiPointLayoutModule {}
