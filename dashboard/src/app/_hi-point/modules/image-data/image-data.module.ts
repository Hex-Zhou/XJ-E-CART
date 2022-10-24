import { BACKPACK_HI } from "../../shared/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageImageData1Component } from "./pages/page-image-data1/page-image-data1.component";
import { BlockSearchGroupComponent } from "./blocks/block-search-group/block-search-group.component";
import { BlockNavItemGroupComponent } from "./blocks/block-nav-item-group/block-nav-item-group.component";
import { BlockLiveStreamingComponent } from "./blocks/block-live-streaming/block-live-streaming.component";
import { BlockHistoryListComponent } from "./blocks/block-history-list/block-history-list.component";
import { ModalDownloadComponent } from "./components/modal-download/modal-download.component";

@NgModule({
	declarations: [
		PageImageData1Component,
		BlockSearchGroupComponent,
		BlockNavItemGroupComponent,
		BlockLiveStreamingComponent,
		BlockHistoryListComponent,
		ModalDownloadComponent,
	],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class ImageDataModule {}
