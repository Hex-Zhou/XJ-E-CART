import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { iiEditHomeSort } from "../models/edit-home.model";
import { ApiBaseService } from "./base/api-base.service";

@Injectable({
  providedIn: "root",
})
export class ApiEditHomeSortService extends ApiBaseService<TYPE> {
  protected override localKey: string = "EDIT-HOME-SORT";
  protected override demoMode: "local" | "fire" = "fire";
  getAll() {
    return this.getAllDemo().pipe(delay(ms));
  }
  getByID(id: string) {
    return this.getByIDDemo(id).pipe(delay(ms));
  }
  add(body: Omit<TYPE, "id">) {
    return this.addDemo(body).pipe(delay(ms));
  }
  update(body: TYPE) {
    return this.updateDemo(body).pipe(delay(ms));
  }
  delete(id: string) {
    return this.deleteDemo(id).pipe(delay(ms));
  }
}
type TYPE = iiEditHomeSort;
const ms = 0;
