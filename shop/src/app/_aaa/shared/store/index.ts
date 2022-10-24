import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { EditHomeSortEffects } from "./edit-home-sort-ngrx";
import { EditHomeEntityEffects } from "./edit-home-entity.ngrx";
import * as fromEditHomeEntity from "./edit-home-entity.ngrx";
import * as fromEditHomeSort from "./edit-home-sort-ngrx";
//
export interface AppState {
  [fromEditHomeEntity.featureKey]: fromEditHomeEntity.State;
  [fromEditHomeSort.featureKey]: fromEditHomeSort.State;
}
export const reducers: ActionReducerMap<AppState> = {
  [fromEditHomeEntity.featureKey]: fromEditHomeEntity.reducer,
  [fromEditHomeSort.featureKey]: fromEditHomeSort.reducer,
};
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const ngrxEffects = [EditHomeEntityEffects, EditHomeSortEffects];
