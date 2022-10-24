import { delay, map, switchMap, tap } from "rxjs/operators";
import { ApiCssThemeService } from "./../apis/api-css-theme.service";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CssThemeService {
  private cssElementRef: any = document.getElementById("THEME-CSS");
  private state?: any; //懶得想結構 預計是{css,id}
  private AllCSSList = cssSelectList;
  constructor(private serv: ApiCssThemeService) {
    this.initCurrCSS();
  }
  // * * * * * public * * * * *
  getCssSelectList(): Select[] {
    return JSON.parse(JSON.stringify(this.AllCSSList));
  }
  isCurrCSS(opt: Select) {
    let origin = location.origin + "/";
    let currentCSSPath = (this.cssElementRef.href as string).replace(origin, "");
    return opt.path === currentCSSPath;
  }
  switchCSS(val: string) {
    this.cssElementRef.href = val;
    this.state.css = val;
    this.serv.update(this.state).subscribe();
  }
  // * * * * * init * * * * *
  initCurrCSS() {
    let temp = { css: this.AllCSSList[3].path };
    const add$ = () => this.serv.add(temp).pipe(map(rid => (this.state = { ...temp, id: rid })));
    const getAll$ = () =>
      this.serv.getAll().pipe(
        switchMap(ary => {
          if (ary.length === 0) return add$();
          return of(ary[0]);
        })
      );
    getAll$()
      .pipe(delay(0))
      .subscribe(res => {
        this.state = res;
        this.cssElementRef.href = res.css;
      });
  }
}
interface Select {
  title: string;
  path: string;
}
const cssSelectList: Select[] = [
  { title: "紅色", path: "red.css" } as const,
  { title: "藍色", path: "blue.css" } as const,
  { title: "黑色", path: "black.css" } as const,
  { title: "黃色", path: "yellow.css" } as const,
  { title: "綠色", path: "green.css" } as const,
];
