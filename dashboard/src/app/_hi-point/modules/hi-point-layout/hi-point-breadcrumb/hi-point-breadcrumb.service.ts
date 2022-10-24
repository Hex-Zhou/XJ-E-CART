import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { Injectable } from "@angular/core";
import { iiRouteList } from "../../../shared/models/core/route-list.model";

@Injectable({
	providedIn: "root",
})
export class HiPointBreadcrumbService {
	constructor() {}

	/**
	 * ```
	 * 用途: 將網址轉換成 路由清單
	 * ```
	 */
	transURLtoRouteList(
		url: string,
		tree: iiRouteList[] = BACKPACK_HI.data.routeList,
		resAry: iiRouteList[] = []
	): iiRouteList[] {
		const root = BACKPACK_HI.enums.route.root;
		const home = BACKPACK_HI.enums.route.home;
		const target = tree.find(e => url.includes(e.link) && e.link !== root);
		if (target) {
			// 在最開頭加入首頁標籤
			if (resAry.length === 0 && target.link !== home) resAry.push(tree.find(e => e.link === home)!);
			resAry.push(target);
			// 進入下一層路由
			if (target.children) return this.transURLtoRouteList(url, target.children, resAry);
		}
		return resAry;
	}
}
