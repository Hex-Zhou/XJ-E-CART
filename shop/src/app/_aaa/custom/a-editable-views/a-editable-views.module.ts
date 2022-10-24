import { AAABlogModule } from "./../../modules/blog/blog.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlocksModule } from "../../modules/blocks/blocks.module";
import { AAAFooterModule } from "../../modules/footer/footer.module";
import { AAAHeaderModule } from "../../modules/header/header.module";
import { AAAMobileModule } from "../../modules/mobile/mobile.module";
import { BACKPACK } from "./../../shared/utils/backpack";
import { AEditableViewsComponent } from "./a-editable-views.component";
import { AEditableBlogComponent } from "./components/a-editable-blog/a-editable-blog.component";
import { AEditableHomeComponent } from "./components/a-editable-home/a-editable-home.component";
import { AEditableShopComponent } from "./components/a-editable-shop/a-editable-shop.component";

@NgModule({
  declarations: [
    AEditableHomeComponent,
    AEditableShopComponent,
    AEditableBlogComponent,
    AEditableViewsComponent,
  ],
  imports: [
    CommonModule,
    BACKPACK.CommonModules,
    AAAFooterModule,
    AAAMobileModule,
    AAAHeaderModule,
    AAABlogModule,
    BlocksModule,
  ],
  exports: [AEditableViewsComponent],
})
export class AEditableViewsModule {}
