import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/modules/auth";
import { BACKPACK } from "src/app/_hex/shared/backpack.class";
import { MenuComponent } from "src/app/_metronic/kt/components";
import { LayoutService } from "src/app/_metronic/layout";

@Component({
	selector: "app-hex-header",
	templateUrl: "./hex-header.component.html",
	styleUrls: ["./hex-header.component.scss"],
})
export class HexHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
	svgList = BACKPACK.enums.svg;
	imgList = BACKPACK.enums.pic;
	routeList = BACKPACK.enums.route;
	//
	headerContainerCssClasses: string = "";
	asideDisplay: boolean = true;
	headerLeft: string = "menu";
	pageTitleCssClasses: string = "";
	pageTitleAttributes: {
		[attrName: string]: string | boolean;
	};
	@ViewChild("ktPageTitle", { static: true }) ktPageTitle: ElementRef;
	private unsubscribe: Subscription[] = [];
	constructor(private layout: LayoutService, private router: Router, private auth: AuthService) {
		this.routingChanges();
	}
	ngOnInit(): void {
		this.headerContainerCssClasses = this.layout.getStringCSSClasses("headerContainer");
		this.asideDisplay = this.layout.getProp("aside.display") as boolean;
		this.headerLeft = this.layout.getProp("header.left") as string;
		this.pageTitleCssClasses = this.layout.getStringCSSClasses("pageTitle");
		this.pageTitleAttributes = this.layout.getHTMLAttributes("pageTitle");
	}
	ngAfterViewInit() {
		if (this.ktPageTitle) {
			for (const key in this.pageTitleAttributes) {
				if (this.pageTitleAttributes.hasOwnProperty(key)) {
					this.ktPageTitle.nativeElement.attributes[key] = this.pageTitleAttributes[key];
				}
			}
		}
	}

	logout() {
		this.auth.logout();
		document.location.reload();
	}

	routingChanges() {
		const routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
				MenuComponent.reinitialization();
			}
		});
		this.unsubscribe.push(routerSubscription);
	}
	ngOnDestroy() {
		this.unsubscribe.forEach(e => e.unsubscribe());
	}
}
