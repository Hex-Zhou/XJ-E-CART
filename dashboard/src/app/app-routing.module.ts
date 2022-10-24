import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./modules/auth/services/auth.guard";

export const routes: Routes = [
	{
		path: "old-auth",
		loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
	},
	{
		path: "auth",
		loadChildren: () => import("./_hi-point/modules/hi-point-auth/hi-point-auth.module").then(m => m.HiPointAuthModule),
	},
	{
		path: "error",
		loadChildren: () => import("./modules/errors/errors.module").then(m => m.ErrorsModule),
	},
	{
		path: "",
		canActivate: [AuthGuard],
		loadChildren: () => import("./_metronic/layout/layout.module").then(m => m.LayoutModule),
	},

	{ path: "**", redirectTo: "error/404" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
