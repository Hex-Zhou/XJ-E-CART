import { iiEditHomeSort } from "./../models/edit-home.model";
import { ApiEditHomeSortService } from "./../apis/api-edit-home-sort.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
	createAction,
	createFeatureSelector,
	createReducer,
	createSelector,
	on,
	props,
} from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { ID, Payload } from "../models/ngrx.model";
// * * * * * custom * * * * *
type TYPE = iiEditHomeSort;
export const featureKey = "EditHomeSort";
// * * * * * state & entity * * * * *
export interface State extends EntityState<TYPE> {}
const adapter: EntityAdapter<TYPE> = createEntityAdapter<TYPE>();
const initialState: State = adapter.getInitialState();
// * * * * * real action * * * * *
const _setAll = createAction(`${featureKey} _setAll`, props<Payload<TYPE[]>>());
const _add = createAction(`${featureKey} _add`, props<Payload<TYPE>>());
const _update = createAction(`${featureKey} _update`, props<Payload<TYPE>>());
const _del = createAction(`${featureKey} _del`, props<Payload<ID>>());
// * * * * * trigger action * * * * *
const setAll = createAction(`${featureKey} setAll`);
const add = createAction(`${featureKey} add`, props<Payload<Omit<TYPE, "id">>>());
const update = createAction(`${featureKey} update`, props<Payload<TYPE>>());
const del = createAction(`${featureKey} del`, props<Payload<ID>>());
export const ACTIONS_EditHomeSort = {
	setAll,
	add,
	update,
	del,
	_setAll,
	_add,
	_update,
	_del,
};
// * * * * * reducer * * * * *
export const reducer = createReducer(
	initialState,
	on(_setAll, (state, action) => adapter.setAll(action.payload, state)),
	on(_add, (state, action) => {
		return adapter.addOne(action.payload, state);
	}),
	on(_update, (state, action) =>
		adapter.updateOne({ id: action.payload.id, changes: action.payload }, state)
	),
	on(_del, (state, action) => adapter.removeOne(action.payload.id, state))
);
// * * * * * selector * * * * *
const featSelector = createFeatureSelector<State>(featureKey);
export const selectEditHomeSortList = createSelector(
	featSelector,
	adapter.getSelectors().selectAll
);
// * * * * * effects * * * * *
@Injectable()
export class EditHomeSortEffects {
	constructor(private actions$: Actions, private serv: ApiEditHomeSortService) {}
	setAll$ = createEffect(() => {
		const api$ = () => this.serv.getAll().pipe(map(payload => ({ payload })));
		const act$ = this.actions$.pipe(
			ofType(setAll),
			exhaustMap(_ => api$().pipe(map(array => _setAll(array))))
		);
		return act$;
	});
	add$ = createEffect(() => {
		const api$ = (body: Omit<TYPE, "id">) => this.serv.add(body);
		const act$ = this.actions$.pipe(
			ofType(add),
			exhaustMap(action =>
				api$(action.payload).pipe(
					map(rid => {
						const temp = JSON.parse(JSON.stringify(action));
						temp.payload.id = rid;
						return _add(temp);
					})
				)
			)
		);
		return act$;
	});
	update$ = createEffect(() => {
		const api$ = (body: TYPE) => this.serv.update(body);
		const act$ = this.actions$.pipe(
			ofType(update),
			exhaustMap(action =>
				api$(action.payload).pipe(
					map(rid => {
						const temp = JSON.parse(JSON.stringify(action));
						temp.payload.id = rid;
						return _update(temp);
					})
				)
			)
		);
		return act$;
	});
	del$ = createEffect(() => {
		const api$ = (id: string) => this.serv.delete(id);
		const act$ = this.actions$.pipe(
			ofType(del),
			exhaustMap(action =>
				api$(action.payload.id).pipe(
					map(rid => {
						const temp = JSON.parse(JSON.stringify(action));
						temp.payload.id = rid;
						return _del(temp);
					})
				)
			)
		);
		return act$;
	});
}
