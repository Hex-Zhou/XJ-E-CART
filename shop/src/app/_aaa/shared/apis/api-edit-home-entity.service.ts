import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { iiEditHomeEntity } from "../models/edit-home.model";
import { ApiBaseService } from "./base/api-base.service";

@Injectable({
  providedIn: "root",
})
export class ApiEditHomeEntityService extends ApiBaseService<TYPE> {
  protected override localKey: string = "EDIT-HOME-ENTITY";
  protected override demoMode: "local" | "fire" = "fire";
  getAll() {
    return this.getAllDemo().pipe(delay(ms));
  }
  getByID(id: string) {
    return this.getByIDDemo(id).pipe();
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
type TYPE = iiEditHomeEntity;
const ms = 0;
