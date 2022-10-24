import { Injectable } from "@angular/core";
import { delay } from "rxjs";
import { ID } from "../models/core/ngrx.model";
import { iiNavigationLink } from "../models/navigation-link.model";
import { ApiBaseService } from "./base/api-base.service";

@Injectable({
	providedIn: "root",
})
export class ApiNavLinkService extends ApiBaseService<TYPE> {
	protected override localKey: string = "EDIT-NESTED-LINK";
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
type TYPE = iiNavigationLink & ID;
const ms = 0;
