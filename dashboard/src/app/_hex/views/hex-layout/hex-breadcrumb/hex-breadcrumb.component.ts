import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BACKPACK } from "src/app/_hex/shared/backpack.class";
import { iiRouteList } from "src/app/_hex/shared/models/core/route-list.model";

@Component({
	selector: "app-hex-breadcrumb",
	templateUrl: "./hex-breadcrumb.component.html",
	styleUrls: ["./hex-breadcrumb.component.scss"],
})
export class HexBreadcrumbComponent implements OnInit {
	breadcrumbList: iiRouteList[] = [];
	// * * * * *  * * * * *
	constructor(private router: Router) {
		this.router.events.subscribe(evt => {
			if (evt instanceof NavigationEnd) {
				this.breadcrumbList = this.URLToRouteList(evt.url) || [];
			}
		});
	}
	ngOnInit(): void {}
	// * * * * *  * * * * *
	private URLToRouteList(
		url: string,
		tree: iiRouteList[] = BACKPACK.data.routeList,
		resAry: iiRouteList[] = []
	): iiRouteList[] {
		const root = BACKPACK.enums.route.root;
		const target = tree.find(e => url.includes(e.link) && e.link !== root);
		if (target) {
			// 在最開頭加入首頁標籤
			const home = BACKPACK.enums.route.home;
			if (resAry.length === 0 && target.link !== home) resAry.push(tree.find(e => e.link === home)!);
			resAry.push(target);
			// 進入下一層路由
			if (target.children) return this.URLToRouteList(url, target.children, resAry);
		}
		return resAry;
	}
}
