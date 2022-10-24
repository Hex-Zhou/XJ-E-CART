import { ACTIONS_EditHomeSort, selectEditHomeSortList } from "./../store/edit-home-sort-ngrx";
import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { BehaviorSubject, of } from "rxjs";
import { filter, map, switchMap, take, tap } from "rxjs/operators";
import { ACTIONS_EditHomeEntity, selectEditHomeEntityList } from "../store/edit-home-entity.ngrx";
import { ApiEditHomeSortService } from "./../apis/api-edit-home-sort.service";
import { iiEditHomeEntity, iiEditHomeSort } from "../models/edit-home.model";
@Injectable({
  providedIn: "root",
})
export class EditHomeService {
  private entityState = new BehaviorSubject<Entity[]>([]);
  private sortState = new BehaviorSubject<null | Sort>(null);
  private isSortLoaded = false;
  private entityAction = ACTIONS_EditHomeEntity;
  private sortAction = ACTIONS_EditHomeSort;
  constructor(private store: Store, private action$: Actions) {
    this.watchSort();
    this.watchEntity();
  }
  // * * * * * val * * * * *
  entity$() {
    return this.entityState.asObservable();
  }
  sort$() {
    return this.sortState
      .asObservable()
      .pipe(filter(val => val !== null))
      .pipe(map(res => res!.id_list));
  }
  private nowEntity() {
    return JSON.parse(JSON.stringify(this.entityState.value)) as Entity[];
  }
  private nowSort() {
    return JSON.parse(JSON.stringify(this.sortState.value)) as Sort;
  }
  getEntityBySort(): Entity[] {
    const out: Entity[] = [];
    if (!this.nowSort()) return out;
    this.nowSort().id_list.forEach(id => {
      const target = this.nowEntity().find(item => id === item.id);
      if (target) out.push(target);
    });
    return out;
  }
  // * * * * * api * * * * *
  addEntity(payload: Omit<Entity, "id">, id_list: string[], idx: number) {
    this.store.dispatch(this.entityAction.add({ payload }));
    this.action$
      .pipe(ofType(this.entityAction._add), take(1))
      .pipe(
        tap(res => {
          id_list[idx] = res.payload.id;
          this.updateSort(id_list);
        })
      )
      .subscribe();
  }
  updateEntity(payload: Entity) {
    this.store.dispatch(this.entityAction.update({ payload }));
  }
  delEntity(id: string) {
    this.store.dispatch(this.entityAction.del({ payload: { id } }));
    this.action$
      .pipe(ofType(this.entityAction._del), take(1))
      .pipe(
        tap(_ => {
          const list = this.nowSort().id_list;
          const idx = list.findIndex(eid => id === eid);
          list.splice(idx, 1);
          this.updateSort(list);
        })
      )
      .subscribe();
  }
  updateSort(id_list: string[]) {
    const payload: Sort = { ...this.nowSort(), id_list };
    this.store.dispatch(this.sortAction.update({ payload }));
  }
  // * * * * * watch * * * * *
  private watchEntity() {
    this.store.dispatch(this.entityAction.setAll());
    this.store
      .pipe(select(selectEditHomeEntityList))
      .subscribe(array => this.entityState.next(array));
  }
  private watchSort() {
    this.store.dispatch(this.sortAction.setAll());
    this.store.pipe(select(selectEditHomeSortList)).subscribe(resAry => {
      if (!this.isSortLoaded) {
        this.isSortLoaded = true;
        return;
      }
      if (resAry.length === 0) {
        const payload = { id_list: [] as string[] };
        this.store.dispatch(this.sortAction.add({ payload }));
      } else {
        this.sortState.next(resAry[0]);
      }
    });
  }
}
type Entity = iiEditHomeEntity;
type Sort = iiEditHomeSort;
