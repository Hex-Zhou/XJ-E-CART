import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { iiHexTablePagination } from "./model/hex-table-pagination";

@Component({
 selector: "hex-table-footer",
 template: `
  <div class="fajb flex-wrap">
   <div class="">
    <nz-select class="min-w-50px" [(ngModel)]="pageSize" (ngModelChange)="emitEvt()">
     <nz-option [nzValue]="5" [nzLabel]="5"></nz-option>
     <nz-option [nzValue]="10" [nzLabel]="10"></nz-option>
     <nz-option [nzValue]="25" [nzLabel]="25"></nz-option>
     <nz-option [nzValue]="50" [nzLabel]="50"></nz-option>
    </nz-select>
    <span class="ms-4 fs-6 fw-bolder">
     目前 {{ (page - 1) * pageSize + 1 }} 到 {{ max((page - 1) * pageSize + pageSize, collectionSize) }}筆，共計
     {{ collectionSize }} 筆
    </span>
   </div>
   <ngb-pagination
    [collectionSize]="collectionSize"
    [(page)]="page"
    [pageSize]="pageSize"
    (pageChange)="emitEvt()"></ngb-pagination>
  </div>
 `,
 styles: [],
})
export class HexTableFooterComponent implements OnInit {
 @Input() collectionSize: number;
 @Input() pageSize: number;
 @Input() page: number;
 @Output() changeEvt = new EventEmitter<iiHexTablePagination>();
 // * * * * *  * * * * *
 constructor() {}
 ngOnInit(): void {}
 // * * * * *  * * * * *
 emitEvt() {
  const data: iiHexTablePagination = {
   collectionSize: this.collectionSize,
   pageSize: this.pageSize,
   page: this.page,
  };
  this.changeEvt.emit(data);
 }
 max(a: number, b: number) {
  return Math.min(a, b);
 }
}
