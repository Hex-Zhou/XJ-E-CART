import { Subscription } from "rxjs";
import { EditViewService } from "./../../../../shared/services/edit-view.service";
import { Component, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { NgbOffcanvas, NgbOffcanvasOptions } from "@ng-bootstrap/ng-bootstrap";
import { CssThemeService } from "src/app/_aaa/shared/services/css-theme.service";

@Component({
  selector: "app-editor-aside",
  templateUrl: "./editor-aside.component.html",
  styleUrls: ["./editor-aside.component.scss"],
})
export class EditorAsideComponent implements OnInit, OnDestroy {
  cssList: any[] = [];
  editableList = this.viewServ.getEditableList();
  selectedView: string = "";
  sb = new Subscription();
  // * * * * * life * * * * *
  constructor(
    private canvasServ: NgbOffcanvas,
    public cssServ: CssThemeService,
    public viewServ: EditViewService
  ) {}
  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
  ngOnInit(): void {
    this.initCss();
    this.initView();
  }
  // * * * * * interaction * * * * *
  openOffcanvas(content: TemplateRef<any>) {
    const opt: NgbOffcanvasOptions = { panelClass: "min-w-500px" };
    this.canvasServ.open(content, opt);
  }
  // * * * * * init * * * * *
  initCss() {
    this.cssList = this.cssServ.getCssSelectList();
  }
  initView() {
    const $ = this.viewServ.getEdit$().subscribe(r => (this.selectedView = r));
    this.sb.add($);
  }
}
