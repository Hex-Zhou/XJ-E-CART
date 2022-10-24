import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EditViewService {
  constructor() {}
  private editState = new BehaviorSubject<EditType>("home");
  getEdit$() {
    return this.editState.asObservable();
  }
  getEditableList() {
    return editableList;
  }
  updateState(rowType: string) {
    const type = rowType as EditType;
    this.editState.next(type);
  }
}
const editableList = ["home", "blog", "shop", "header"] as const;
type EditType = typeof editableList[number];
