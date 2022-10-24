import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LayoutSettingService } from "../apis/layout-setting.service";
import { iiLayoutBase } from "./../models/layout-setting.model";
@Injectable({
  providedIn: "root",
})
export class LayoutSettingResolver implements Resolve<iiLayoutBase> {
  constructor(private layoutServ: LayoutSettingService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iiLayoutBase> {
    return this.layoutServ.getBase();
  }
}
