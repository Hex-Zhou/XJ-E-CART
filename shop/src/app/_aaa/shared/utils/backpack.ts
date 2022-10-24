import { SharedModule } from "./../../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";
import { CarouselModule } from "ngx-owl-carousel-o";
import { RedZoomModule } from "ngx-red-zoom";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CollapseModule } from "ngx-bootstrap/collapse";
export class BACKPACK {
  static CommonModules = [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    ModalModule,
    RedZoomModule,
    SharedModule,
    DragDropModule,
    CollapseModule,
  ];
}
