import { HexDashboardComponent } from "./views/hex-dashboard/hex-dashboard.component";
import { HexRootComponent } from "./views/hex-layout/hex-root/hex-root.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: HexRootComponent,
		children: [
			{ path: "dashboard", component: HexDashboardComponent },
			{ path: "", pathMatch: "full", redirectTo: "/hex/dashboard" },
		],
	},
	{ path: "", pathMatch: "full", redirectTo: "/hex/dashboard" },
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HexRoutingModule {}
