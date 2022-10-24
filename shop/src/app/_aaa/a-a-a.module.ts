import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AAARoutingModule } from "./a-a-a-routing.module";
import { AEditableViewsModule } from "./custom/a-editable-views/a-editable-views.module";
import { AEditorModule } from "./custom/a-editor/a-editor.module";
import { SafePipe } from './shared/pipes/safe.pipe';
@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [CommonModule, AAARoutingModule, AEditorModule, AEditableViewsModule],
})
export class AAAModule {}
