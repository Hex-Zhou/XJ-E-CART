import { BACKPACK_HI } from "src/app/_hi-point/shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageAgentComponent } from "./pages/page-agent/page-agent.component";
import { ModalAddComponent } from "./components/modal-add/modal-add.component";
import { ModalDeviceConfigComponent } from "./components/modal-device-config/modal-device-config.component";

@NgModule({
	declarations: [PageAgentComponent, ModalAddComponent, ModalDeviceConfigComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class AgentModule {}
