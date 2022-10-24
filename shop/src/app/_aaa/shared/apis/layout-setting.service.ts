import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { layoutSettingDef } from "../data/layout-setting-def.data";
@Injectable({
  providedIn: "root",
})
export class LayoutSettingService {
  private dataDef = layoutSettingDef;
  constructor() {}
  getBase() {
    return of(this.dataDef.base).pipe(delay(100));
  }
}
