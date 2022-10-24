import { Routes } from "@angular/router";
import { BACKPACK } from "../_hex/shared/backpack.class";

const Routing: Routes = [
	// {
	// 	path: BACKPACK_HI.enums.route.root,
	// 	loadChildren: () => import("../_hi-point/hi-point.module").then(m => m.HiPointModule),
	// },
	{
		path: BACKPACK.enums.route.root,
		loadChildren: () => import("../_hex/hex.module").then(m => m.HexModule),
	},
	{
		path: "dashboard",
		loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
	},
	{
		path: "builder",
		loadChildren: () => import("./builder/builder.module").then(m => m.BuilderModule),
	},
	{
		path: "crafted/pages/profile",
		loadChildren: () => import("../modules/profile/profile.module").then(m => m.ProfileModule),
	},
	{
		path: "crafted/account",
		loadChildren: () => import("../modules/account/account.module").then(m => m.AccountModule),
	},
	{
		path: "crafted/pages/wizards",
		loadChildren: () => import("../modules/wizards/wizards.module").then(m => m.WizardsModule),
	},
	{
		path: "crafted/widgets",
		loadChildren: () => import("../modules/widgets-examples/widgets-examples.module").then(m => m.WidgetsExamplesModule),
	},
	{
		path: "apps/chat",
		loadChildren: () => import("../modules/apps/chat/chat.module").then(m => m.ChatModule),
	},
	{
		path: "",
		redirectTo: `${BACKPACK.enums.route.home}`,
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "error/404",
	},
];

export { Routing };
