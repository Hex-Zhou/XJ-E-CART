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
} from "@angular/core";

@Directive({
 selector: "[hexGrayViewItem]",
})
export class HexGrayViewItemDirective implements OnChanges, OnInit {
 @Input() feat: "row" | "title" | "check" | "normal" = "normal";
 @Input() val?: string;
 isDone = false;
 constructor(private r2: Renderer2, private el: ElementRef, private viewRef: ViewContainerRef) {}
 ngOnInit(): void {
  this.do();
 }
 ngOnChanges(changes: SimpleChanges): void {
  this.do();
 }
 do() {
  if (this.isDone) return;
  const target = this.el.nativeElement;
  if (this.viewRef) this.viewRef.clear();
  const add = (str: string) => str.split(" ").forEach(e => this.r2.addClass(target, e));
  if (this.feat === "row") add("fajb");
  if (this.feat === "normal") add("fs-3 fw-bolder min-w-175px");
  if (this.feat === "check") add("form-checkbox");
  if (this.feat === "title") {
   const ref = this.viewRef.createComponent(BulletComponent);
   ref.instance.data = this.val || "-";
   this.r2.appendChild(target, ref.location.nativeElement);
  }
  this.isDone = true;
 }
}
// * * * * *  * * * * *
@Component({
 template: `
  <div class="align-items-center justify-content-start d-flex gap-3 min-w-175px">
   <span class="bullet bullet-vertical h-20px bg-success"></span>
   <span class="fs-3 fw-bolder ">{{ data }}</span>
  </div>
 `,
})
class BulletComponent {
 data: string;
}
