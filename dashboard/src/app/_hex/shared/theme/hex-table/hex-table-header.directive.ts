import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
 selector: "[hexTH]",
})
export class HexTableHeaderDirective implements OnInit {
 @Input() mw = 0;
 @Input() direction: "right" | "left" | "center" = "left";
 constructor(private el: ElementRef, private r2: Renderer2) {}
 ngOnInit(): void {
  this.r2.addClass(this.el.nativeElement, "pointer");
  if (this.mw) this.r2.addClass(this.el.nativeElement, `min-w-${this.mw}px`);
  if (this.direction)
   this.r2.addClass(this.el.nativeElement, `text-${this.direction}`);
 }
}
