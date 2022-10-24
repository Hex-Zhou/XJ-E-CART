import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BACKPACK_HI } from "../../shared/backpack.class";
import { BlockCompressorComponent } from "./blocks/block-compressor/block-compressor.component";
import { BlockDeviceIndicatorGroupComponent } from "./blocks/block-device-indicator-group/block-device-indicator-group.component";
import { BlockFormCo2Component } from "./blocks/block-form-co2/block-form-co2.component";
import { BlockFormHumidityComponent } from "./blocks/block-form-humidity/block-form-humidity.component";
import { BlockFormLedComponent } from "./blocks/block-form-led/block-form-led.component";
import { BlockFormRpmComponent } from "./blocks/block-form-rpm/block-form-rpm.component";
import { BlockFormTempComponent } from "./blocks/block-form-temp/block-form-temp.component";
import { BlockOpenCloseComponent } from "./blocks/block-open-close/block-open-close.component";
import { BlockSearchGroupComponent } from "./blocks/block-search-group/block-search-group.component";
import { BigLabelComponent } from "./components/big-label/big-label.component";
import { FormControlComponent } from "./components/form-control/form-control.component";
import { PageControlSetting1Component } from "./pages/page-control-setting1/page-control-setting1.component";

@NgModule({
	declarations: [
		PageControlSetting1Component,
		//
		BlockSearchGroupComponent,
		BlockDeviceIndicatorGroupComponent,
		BlockFormTempComponent,
		BlockFormHumidityComponent,
		BlockFormCo2Component,
		BlockFormLedComponent,
		BlockFormRpmComponent,
		BlockCompressorComponent,
		//
		FormControlComponent,
		//
		BigLabelComponent,
		BlockOpenCloseComponent,
		//
	],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class ControlSettingModule {}
