import { Injectable } from "@angular/core";

@Injectable({
 providedIn: "root",
})
export class HexTableSupportService {
 private lastSortedKey = "";
 private lastActionIsAsc = false;
 constructor() {}
 getShowData<T>(data: T[], currPage: number, perPage: number) {
  return data.slice(
   (currPage - 1) * perPage,
   (currPage - 1) * perPage + perPage
  );
 }
 sort<T>(data: T[], key: keyof T) {
  if (key === this.lastSortedKey && this.lastActionIsAsc) {
   data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
   this.lastActionIsAsc = false;
  } else {
   data.sort((b, a) => (a[key] > b[key] ? 1 : -1));
   this.lastActionIsAsc = true;
   this.lastSortedKey = key as string;
  }
 }
}
