import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { iiRouteList } from "../../../shared/models/core/route-list.model";
import { HiPointBreadcrumbService } from "./hi-point-breadcrumb.service";

@Component({
 selector: "app-hi-point-breadcrumb",
 templateUrl: "./hi-point-breadcrumb.component.html",
 styleUrls: ["./hi-point-breadcrumb.component.scss"],
})
export class HiPointBreadcrumbComponent implements OnInit {
 breadcrumbList: iiRouteList[] = [];
 constructor(private cdr: ChangeDetectorRef, private router: Router, private breadcrumbServ: HiPointBreadcrumbService) {
  this.router.events.subscribe(evt => {
   if (evt instanceof NavigationEnd) {
    // evt.url
    this.breadcrumbList = this.breadcrumbServ.transURLtoRouteList(evt.url) || [];
   }
  });
 }

 ngOnInit(): void {}
}
