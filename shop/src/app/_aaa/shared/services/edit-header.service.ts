import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, Observable, of, switchMap } from "rxjs";
import { ApiEditHeaderService } from "../apis/api-edit-header.service";
import { iiEditHeader } from "./../models/edit-header.model";

@Injectable({
  providedIn: "root",
})
export class EditHeaderService {
  private state = new BehaviorSubject<Header | null>(null);
  constructor(private serv: ApiEditHeaderService) {
    this.initState();
  }
  // * * * * * value * * * * *
  getState$() {
    return this.state.asObservable().pipe(filter(val => val !== null)) as Observable<Header>;
  }
  private nowState() {
    return JSON.parse(JSON.stringify(this.state.value)) as Header;
  }
  // * * * * * action * * * * *
  updateState(newVal: Header) {
    const id = this.nowState().id!;
    this.serv.update({ ...newVal, id }).subscribe(_ => this.state.next({ ...newVal, id }));
  }
  initState() {
    const add$ = () => {
      const temp: Omit<Header, "id"> = {
        dropcartType: "dropdown",
        headerLayout: "classic",
      };
      return this.serv.add(temp).pipe(map(id => ({ ...temp, id })));
    };
    this.serv
      .getAll()
      .pipe(
        switchMap(res => {
          if (res.length > 0) return of(res[0]);
          return add$();
        })
      )
      .subscribe(res => {
        this.state.next(res);
      });
  }
}
type Header = iiEditHeader;
