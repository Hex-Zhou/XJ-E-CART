import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BACKPACK_HI } from "../../shared/backpack.class";
import { PageAuthRootComponent } from "./pages/page-auth-root/page-auth-root.component";
import { PageLogin1Component } from "./pages/page-login1/page-login1.component";
const routes: Routes = [
	{
		path: "",
		component: PageAuthRootComponent,
		children: [
			{
				path: "",
				redirectTo: "login",
				pathMatch: "full",
			},
			{
				path: "login",
				component: PageLogin1Component,
				data: { returnUrl: window.location.pathname },
			},

			{ path: "", redirectTo: "login", pathMatch: "full" },
			{ path: "**", redirectTo: "login", pathMatch: "full" },
		],
	},
];
@NgModule({
	declarations: [PageLogin1Component, PageAuthRootComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules, RouterModule.forChild(routes)],
})
export class HiPointAuthModule {}
