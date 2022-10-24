import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HexAsideComponent } from "./hex-aside/hex-aside.component";
import { HexBreadcrumbComponent } from "./hex-breadcrumb/hex-breadcrumb.component";
import { HexHeaderComponent } from "./hex-header/hex-header.component";
import { HexRootComponent } from "./hex-root/hex-root.component";

@NgModule({
	declarations: [HexAsideComponent, HexBreadcrumbComponent, HexHeaderComponent, HexRootComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
	exports: [HexAsideComponent, HexHeaderComponent, HexRootComponent],
})
export class HexLayoutModule {}
