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
import { HiPointSharedModule } from "./hi-point-shared.module";
import { HexTableModule } from "./theme/hex-table/hex-table.module";
import { tyBSColor } from "./types/bs-all-color.type";
import { tyDuoTune } from "./types/duotune.type";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { apexUtil } from "./function/apex-chat-util.func";
export class BACKPACK_HI {
	/**
	 * ```
	 * 用途: 匯集所有枚舉類
	 * ```
	 */
	static enums = {
		route: RoutePathEnum,
		pic: PicPathEnum,
		svg: SVGEnum,
	};
	/**
	 * ```
	 * 用途: 匯集所有固定常數
	 * ```
	 */
	static data = {
		routeList: RoutesList,
	};
	/**
	 * ```
	 * 用途: 匯集所有設定檔
	 * ```
	 */
	static configs = {
		// dataTable: dataTableConfigs,
		ngbModal: ngbModalOptions,
	};
	/**
	 * ```
	 * 時機: 建立Module後
	 * 用途: import 每個Module都要用的Mod
	 * ```
	 */
	static commonModules = [
		NzSelectModule,
		NzInputModule,
		NzIconModule,
		// nz-zorro
		HiPointSharedModule,
		HexTableModule,
		HexGrayViewListModule,
		// custom
		InlineSVGModule,
		NgApexchartsModule,
		SwiperModule,
		// third party
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		NgbPaginationModule,
		NzDatePickerModule,
		// angular core
	];
	/**
	 * ```
	 * 用途: 默認的swal格式清單
	 * ```
	 */
	static swalDef = {
		delete: swalDelete,
	};
	/**
	 * ```
	 * 用途: 取代原本的讀取CSS顏色功能
	 * ```
	 */
	static getColor(color: tyBSColor) {
		return getCSSVariableValue(`--bs-${color}`);
	}
	/**
	 * ```
	 * 用途: 用更容易的方式取得內建svg的路徑
	 * ```
	 */
	static getDuoTune(type: tyDuoTune, num: number) {
		return getDuoTune(type, num);
	}
	static apexUtil = apexUtil;
	constructor() {}
}
