import {
 AfterContentChecked,
 AfterContentInit,
 AfterViewInit,
 ChangeDetectorRef,
 Component,
 ContentChildren,
 Directive,
 OnDestroy,
 OnInit,
 QueryList,
 TemplateRef,
} from "@angular/core";
// * * * * * HEX-PROJECTION-TABLE-HEAD * * * * *
/**
 * @deprecated 目前為廢棄方案
 */
@Directive({
 selector: "[appHexPjTH]",
})
export class HexProjectTableHeadDirective {
 constructor(public tempRef: TemplateRef<unknown>) {}
}
// * * * * * HEX-PROJECTION-TABLE-ROW * * * * *
/**
 * @deprecated 目前為廢棄方案
 */
@Directive({
 selector: "[appHexPjTR]",
})
export class HexProjectTableRowDirective {
 constructor(public tempRef: TemplateRef<unknown>) {}
}
// * * * * * HEX-TABLE-COMPONENT * * * * *
@Component({
 selector: "hex-table",
 template: `
  <div class="table-responsive">
   <table class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-3 row-border hover ">
    <thead>
     <tr class="fw-bolder fs-3 text-muted">
      <!-- <ng-container *ngFor="let th of THs">
              <ng-container [ngTemplateOutlet]="th.tempRef"></ng-container>
            </ng-container> -->
      <ng-content select="[th]"></ng-content>
     </tr>
    </thead>
    <tbody class="">
     <!-- <ng-container *ngFor="let tr of TRs">
            <ng-container [ngTemplateOutlet]="tr.tempRef"></ng-container>
          </ng-container> -->
     <ng-content select="[tr]"></ng-content>
    </tbody>
   </table>
  </div>
 `,
})
export class HexTableComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
 // * * * * *  * * * * *
 // @ContentChildren(HexProjectTableHeadDirective)
 // THs: QueryList<HexProjectTableHeadDirective>;
 // @ContentChildren(HexProjectTableRowDirective)
 // TRs: QueryList<HexProjectTableRowDirective>;
 // * * * * *  * * * * *
 constructor(private cdr: ChangeDetectorRef) {}
 ngAfterContentChecked(): void {}
 ngAfterViewInit(): void {}
 ngAfterContentInit(): void {}
 ngOnDestroy(): void {}
 ngOnInit(): void {}
}
