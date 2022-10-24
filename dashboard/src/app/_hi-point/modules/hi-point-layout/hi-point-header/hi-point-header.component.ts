import { AuthService } from "./../../../../modules/auth/services/auth.service";
import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	AfterViewInit,
	ElementRef,
	OnDestroy,
	ViewChild,
} from "@angular/core";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
import { Subscription } from "rxjs";
import { MenuComponent } from "src/app/_metronic/kt/components";
import { LayoutService } from "src/app/_metronic/layout";
@Component({
	selector: "app-hi-point-header",
	templateUrl: "./hi-point-header.component.html",
	styleUrls: ["./hi-point-header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiPointHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
	svgList = BACKPACK_HI.enums.svg;
	imgList = BACKPACK_HI.enums.pic;
	routeList = BACKPACK_HI.enums.route;
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
