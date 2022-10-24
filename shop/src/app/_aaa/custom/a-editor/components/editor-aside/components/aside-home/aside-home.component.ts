import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { NgbModal, NgbOffcanvas, NgbOffcanvasOptions } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { AEditorModalHomeComponent } from "../../../modal/a-editor-modal-home/a-editor-modal-home.component";
import { iiEditHomeEntity } from "../../../../../../shared/models/edit-home.model";
import { EditHomeService } from "./../../../../../../shared/services/edit-home.service";

@Component({
  selector: "app-aside-home",
  templateUrl: "./aside-home.component.html",
  styleUrls: ["./aside-home.component.scss"],
})
export class AsideHomeComponent implements OnInit, OnDestroy {
  isCollapse = { addBar: false, customBar: false };
  defLabelList: iiLabel[] = Object.assign([], addListDef);
  nowLabelList: iiLabel[] = [];
  nowEntity: iiEditHomeEntity[] = [];
  // * * * * * async var * * * * *
  sb: Subscription = new Subscription();
  // * * * * * life * * * * *
  constructor(
    private editHomeServ: EditHomeService,
    private modalServ: NgbModal,
    private canvasServ: NgbOffcanvas
  ) {
    this.watchAll();
  }
  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }
  ngOnInit(): void {}
  // * * * * * interaction * * * * *
  openModal(i: number) {
    const ref = this.modalServ.open(AEditorModalHomeComponent, { centered: true });
    ref.componentInstance.item = this.nowEntity[i];
  }
  openOffcanvas(content: TemplateRef<any>) {
    const opt: NgbOffcanvasOptions = { panelClass: "min-w-500px" };
    this.canvasServ.open(content, opt);
  }
  collapse(param: "addBar" | "customBar") {
    this.isCollapse[param] = !this.isCollapse[param];
  }
  drop(evt: CdkDragDrop<iiLabel[]>) {
    const isSameContainer = evt.container === evt.previousContainer;
    const isAddList = evt.container.id === "asideAddList";
    // add列表 不進行任何動作
    if (isAddList) return;
    if (isSameContainer) {
      // 排序後 更新狀態
      moveItemInArray(evt.container.data, evt.previousIndex, evt.currentIndex);
      this.reOrder(evt.container.data);
    } else {
      // 新增區塊 後 更新狀態
      transferArrayItem(
        evt.previousContainer.data,
        evt.container.data,
        evt.previousIndex,
        evt.currentIndex
      );
      this.addBlock(evt.container.data, evt.currentIndex);
      // reset 加入區塊的元素
      this.defLabelList = Object.assign([], addListDef);
    }
  }
  // * * * * * logic * * * * *
  private addBlock(list: iiLabel[], idx: number) {
    const id_list = list.map(e => e.id);
    const temp = {
      type: list[idx].type,
    };
    this.editHomeServ.addEntity(temp, id_list, idx);
  }
  private reOrder(list: iiLabel[]) {
    const id_list = list.map(e => e.id);
    this.editHomeServ.updateSort(id_list);
  }
  // * * * * * watch * * * * *
  private watchAll() {
    const $1 = this.editHomeServ.sort$().subscribe(_ => {
      this.nowEntity = this.editHomeServ.getEntityBySort();
      this.nowLabelList = this.nowEntity.map(elem => item2label(elem));
    });
    this.sb.add($1);
    const $2 = this.editHomeServ.entity$().subscribe(_ => {
      this.nowEntity = this.editHomeServ.getEntityBySort();
      this.nowLabelList = this.nowEntity.map(elem => item2label(elem));
    });
    this.sb.add($2);
  }
}
const item2label = (item: iiEditHomeEntity): iiLabel => {
  return { id: item.id!, title: eeBlockHomeLabel[item.type], type: item.type };
};
const addListDef: iiLabel[] = [
  { id: "無", title: "廣告輪播", type: "slideshow" },
  { id: "無", title: "特色標籤", type: "features" },
  { id: "無", title: "聯名品牌", type: "brands" },
  { id: "無", title: "貼文區塊", type: "posts" },
  { id: "無", title: "商品區塊", type: "carousel" },
  { id: "無", title: "商品分類", type: "categories" },
  { id: "無", title: "直列商品區塊", type: "prodColumns" },
];
enum eeBlockHomeLabel {
  "slideshow" = "廣告輪播",
  "features" = "特色標籤",
  "brands" = "聯名品牌",
  "posts" = "貼文區塊",
  "carousel" = "商品區塊",
  "categories" = "商品分類",
  "prodColumns" = "直列商品區塊",
}
interface iiLabel {
  id: string;
  title: string;
  type: typeof constBlockType[number];
}
let constBlockType = [
  "slideshow",
  "features",
  "brands",
  "posts",
  "carousel",
  "categories",
  "prodColumns",
] as const;
