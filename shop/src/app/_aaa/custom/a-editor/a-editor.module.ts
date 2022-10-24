import { BACKPACK } from "./../../shared/utils/backpack";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AEditorComponent } from "./a-editor.component";
import { EditorAsideComponent } from "./components/editor-aside/editor-aside.component";
import { AEditorModalShopComponent } from "./components/modal/a-editor-modal-shop/a-editor-modal-shop.component";
import { AEditableViewsModule } from "../a-editable-views/a-editable-views.module";
import { AEditorModalHomeComponent } from "./components/modal/a-editor-modal-home/a-editor-modal-home.component";
import { AsideBlogComponent } from './components/editor-aside/components/aside-blog/aside-blog.component';
import { AsideHomeComponent } from './components/editor-aside/components/aside-home/aside-home.component';
import { AsideShopComponent } from './components/editor-aside/components/aside-shop/aside-shop.component';
import { AsideHeaderComponent } from './components/editor-aside/components/aside-header/aside-header.component';

@NgModule({
  declarations: [
    AEditorComponent,
    AEditorModalHomeComponent,
    EditorAsideComponent,
    AEditorModalShopComponent,
    AsideBlogComponent,
    AsideHomeComponent,
    AsideShopComponent,
    AsideHeaderComponent,
  ],
  imports: [CommonModule, BACKPACK.CommonModules, AEditableViewsModule],
})
export class AEditorModule {}
