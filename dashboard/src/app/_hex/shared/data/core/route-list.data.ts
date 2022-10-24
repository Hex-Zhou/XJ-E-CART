// https://preview.keenthemes.com/html/metronic/docs/icons/duotune
import { RoutePathEnum } from "../../enum/route-path.enum";
import { getDuoTune } from "../../function/duotune.func";
import { iiRouteList } from "../../models/core/route-list.model";
const route = RoutePathEnum;
export const RoutesList: iiRouteList[] = [
	{
		title: "首頁",
		link: route.home,
		root: true,
		icon: getDuoTune("abstract", 25),
	},
];
