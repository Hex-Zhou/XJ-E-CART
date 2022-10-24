import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
 selector: "[hexBtnStyle]",
})
export class HexBtnStyleDirective implements OnChanges {
 @Input() size?: "lg" | "sm";
 @Input() color?: "success" | "primary" | "danger" | "info" | "death";
 @Input() feat?: "toolBarRed" | "toolBarPink" | "ctrlSave" | "search" | "modalFooter" | "chartBadge";
 constructor(private el: ElementRef, private r2: Renderer2) {}
 ngOnChanges(changes: SimpleChanges): void {
  const target = this.el.nativeElement;
  const add = (str: string) => str.split(" ").forEach(e => this.r2.addClass(target, e));
  if (this.feat) {
   if (this.feat === "toolBarPink") add("btn-pink btn fs-3 fw-bolder rounded rounded-3 text-nowrap fajc");
   if (this.feat === "toolBarRed") add("btn-danger btn fs-3 fw-bolder rounded rounded-3 text-nowrap");
   if (this.feat === "search") add("btn fs-3 fw-bolder min-w-125px text-nowrap");
   if (this.feat === "ctrlSave") add("py-1 px-6 btn fs-3 fw-bolder btn-danger hoverable text-nowrap");
   if (this.feat === "modalFooter") add("btn btn-sm fs-3 px-8 text-nowrap");
   if (this.feat === "chartBadge") add("btn fs-3 py-0 fw-bolder btn-danger hoverable text-nowrap");
  }
  if (this.color) add(`btn-${this.color}`);
  if (this.size) add(`btn-${this.size}`);
 }
}
