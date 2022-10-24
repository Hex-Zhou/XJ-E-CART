import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AEditorComponent } from "./custom/a-editor/a-editor.component";
import { LayoutSettingResolver } from "./shared/resolvers/layout-setting.resolver";
const routes: Routes = [
  { path: "custom", component: AEditorComponent, resolve: { data: LayoutSettingResolver } },
  { path: "", redirectTo: "custom", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LayoutSettingResolver],
})
export class AAARoutingModule {}
