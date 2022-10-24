import { HexSharedModule } from "./hex-shared.module";
import { HexGrayViewListModule } from "./theme/hex-gray-view-list/hex-gray-view-list.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg-2";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";
import { SwiperModule } from "swiper/angular";
import { ngbModalOptions } from "./config/ngbModal.config";
import { RoutesList } from "./data/core/route-list.data";
import { PicPathEnum } from "./enum/pic-path.enum";
import { RoutePathEnum } from "./enum/route-path.enum";
import { SVGEnum } from "./enum/svg.enum";
import { getDuoTune } from "./function/duotune.func";
import { swalDelete } from "./function/swal.func";
import { HexTableModule } from "./theme/hex-table/hex-table.module";
import { tyBSColor } from "./types/bs-all-color.type";
import { tyDuoTune } from "./types/duotune.type";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { apexUtil } from "./function/apex-chat-util.func";
import { NzTreeModule } from "ng-zorro-antd/tree";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
export class BACKPACK {
	static enums = {
		route: RoutePathEnum,
		pic: PicPathEnum,
		svg: SVGEnum,
	};
	static data = {
		routeList: RoutesList,
	};
	static configs = {
		// dataTable: dataTableConfigs,
		ngbModal: ngbModalOptions,
	};
	static commonModules = [
		NzSelectModule,
		NzInputModule,
		NzIconModule,
		NzTreeModule,
		NzPopoverModule,
		NzDatePickerModule,
		NzDropDownModule,
		// nz-zorro
		HexSharedModule,
		HexTableModule,
		HexGrayViewListModule,
		// custom
		InlineSVGModule,
		NgApexchartsModule,
		SwiperModule,
		NgbPaginationModule,
		// third party
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		// angular core
	];
	static swalDef = {
		delete: swalDelete,
	};
	static getColor(color: tyBSColor) {
		return getCSSVariableValue(`--bs-${color}`);
	}
	static getDuoTune(type: tyDuoTune, num: number) {
		return getDuoTune(type, num);
	}
	static apexUtil = apexUtil;
	constructor() {}
}
