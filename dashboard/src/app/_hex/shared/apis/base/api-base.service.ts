import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { from, map, Observable, of, take } from "rxjs";
import { v4 } from "uuid";
import { ID } from "../../models/core/ngrx.model";
@Injectable({
	providedIn: "root",
})
// * * * * * 默認 any * * * * *
export abstract class ApiBaseService<T extends ID = any> {
	protected localKey = "key is Null";
	protected demoMode: "local" | "fire" = "local";
	constructor(protected http: HttpClient, private db: AngularFireDatabase) {}
	protected getAllDemo() {
		if (this.demoMode === "local") return this.getAllLocal();
		return this.getAllFire();
	}
	protected getByIDDemo(id: string) {
		if (this.demoMode === "local") return this.getByIDLocal(id);
		return this.getByIDFire(id);
	}
	protected addDemo(body: Omit<T, "id">) {
		if (this.demoMode === "local") return this.addLocal(body);
		return this.addFire(body);
	}
	protected updateDemo(body: T) {
		if (this.demoMode === "local") return this.updateLocal(body);
		return this.updateFire(body);
	}
	protected deleteDemo(id: string) {
		if (this.demoMode === "local") return this.deleteLocal(id);
		return this.deleteFire(id);
	}
	private getLocalDataList() {
		let result: T[] = [];
		try {
			result = JSON.parse(localStorage.getItem(this.localKey)!);
		} catch {
			result = [];
		}
		return result;
	}
	// * * * * * fire base * * * * *
	private getAllFire() {
		const listRef = this.db.list(`${this.localKey}`);
		return listRef.snapshotChanges().pipe(
			take(1),
			map(action =>
				action.map(e => {
					let payload = e.payload.val() as T;
					return { ...payload, id: e.payload.key! } as T;
				})
			)
		);
	}
	private getByIDFire(id: string): Observable<null | T> {
		return this.getAllFire().pipe(
			map(resAry => {
				const target = resAry.find(e => e.id === id);
				if (target) return target;
				return null;
			})
		);
	}
	private addFire(body: Omit<T, "id">): Observable<string> {
		const listRef = this.db.list(`${this.localKey}`);
		const ob$ = from(listRef.push(body)).pipe(map(e => e.key || "null"));
		return ob$;
	}
	private updateFire(body: T): Observable<string> {
		const listRef = this.db.list(`${this.localKey}`);
		const ob$ = from(listRef.update(body.id, body)).pipe(map(_ => body.id || "null"));
		return ob$;
	}
	private deleteFire(id: string): Observable<string> {
		const listRef = this.db.list(`${this.localKey}`);
		const ob$ = from(listRef.remove(id)).pipe(map(_ => id || "null"));
		return ob$;
	}
	private getAllLocal() {
		return of(this.getLocalDataList() || []);
	}
	private getByIDLocal(id: string): Observable<null | T> {
		const resAry = this.getLocalDataList() || [];
		const target = resAry.find(e => e.id === id);
		if (target) {
			return of(target);
		}
		return of(null);
	}
	// * * * * * local * * * * *
	private addLocal(body: Omit<T, "id">): Observable<string> {
		const resAry = this.getLocalDataList() || [];
		const editedBody = { ...body, id: v4() };
		const editedArray = [...resAry, editedBody];
		localStorage.setItem(this.localKey, JSON.stringify(editedArray));
		return of(editedBody.id);
	}
	private updateLocal(body: T): Observable<string> {
		const resAry = this.getLocalDataList() || [];
		const targetIdx = resAry.findIndex(e => e["id"] === body.id);
		if (targetIdx > -1) {
			resAry[targetIdx] = body;
			localStorage.setItem(this.localKey, JSON.stringify(resAry));
			return of(body.id);
		}
		return of("null");
	}
	private deleteLocal(id: string): Observable<string> {
		const resAry = this.getLocalDataList() || [];
		const targetIdx = resAry.findIndex(e => e["id"] === id);
		if (targetIdx > -1) {
			resAry.splice(targetIdx, 1);
			localStorage.setItem(this.localKey, JSON.stringify(resAry));
			return of(id);
		}
		return of("null");
	}
}
