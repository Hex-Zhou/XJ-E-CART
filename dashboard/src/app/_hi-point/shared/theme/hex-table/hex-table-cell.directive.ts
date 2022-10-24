import {
 Component,
 Directive,
 ElementRef,
 Input,
 OnChanges,
 OnInit,
 Renderer2,
 SimpleChanges,
 ViewContainerRef,
 ViewEncapsulation,
} from "@angular/core";

@Directive({
 selector: "[hexTD]",
})
export class HexTableCellDirective implements OnInit, OnChanges {
 // * * * * *  * * * * *
 @Input() isClear: boolean = false;
 @Input() val: any = "";
 @Input() direction: "right" | "left" | "center" = "left";
 @Input() feat: "basic" | "time" | "badge" | "buttons" = "basic";
 // * * * * *  * * * * *
 private comRef: any = null;
 // * * * * *  * * * * *
 constructor(private el: ElementRef, private r2: Renderer2, private viewRef: ViewContainerRef) {}
 ngOnChanges(changes: SimpleChanges): void {
  if ((changes["val"] || !this.isClear) && this.comRef) this.setStyle();
  if (this.isClear && this.comRef) this.viewRef.clear();
 }
 ngOnInit(): void {
  this.setStyle();
 }
 // * * * * *  * * * * *
 setStyle() {
  const target = this.el.nativeElement;
  this.viewRef.clear();
  if (this.feat === "buttons") this.r2.addClass(target, "hex_buttons");
  if (this.feat === "basic") this.comRef = this.viewRef.createComponent(TableCellBasicComponent);
  if (this.feat === "time") this.comRef = this.viewRef.createComponent(TableCellTimeComponent);
  if (this.feat === "badge") this.comRef = this.viewRef.createComponent(TableCellBadgeComponent);
  if (this.comRef) this.comRef.instance.data = this.val;
  if (this.comRef) this.r2.appendChild(target, this.comRef.location.nativeElement);
  this.r2.addClass(target, `text-${this.direction}`);
 }
}
// * * * * *  * * * * *
@Component({
 encapsulation: ViewEncapsulation.None,
 template: `
  <a class="text-dark fw-bolder text-hover-primary fs-6">{{ data || "-" }}</a>
 `,
})
export class TableCellBasicComponent {
 data: any;
}
// * * * * *  * * * * *
@Component({
 encapsulation: ViewEncapsulation.None,
 template: `
  <span class="text-primary fw-bolder d-block fs-7">
   {{ data | date: "YYYY/MM/dd" }}
  </span>
  <span class="text-muted fw-bolder d-block fs-8">
   {{ data | date: "hh:mm:ss" }}
  </span>
 `,
})
export class TableCellTimeComponent {
 data: any;
}
// * * * * *  * * * * *
@Component({
 encapsulation: ViewEncapsulation.None,
 template: `
  <span class="badge badge-light-info px-8 fs-5 pointer">{{ data || "-" }}</span>
 `,
})
export class TableCellBadgeComponent {
 data: any;
}
