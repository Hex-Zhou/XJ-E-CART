import { BACKPACK_HI } from "./../../../../shared/backpack.class";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FakeErrorReportData } from "src/app/_hi-point/shared/data/fake-err-report.data";
import { iiErrorReport } from "src/app/_hi-point/shared/models/err-report.model";
import { HexTableSupportService } from "src/app/_hi-point/shared/theme/hex-table/hex-table-support.service";
import { iiHexTablePagination } from "src/app/_hi-point/shared/theme/hex-table/model/hex-table-pagination";
import { getISOWeek } from "date-fns";
import { en_US, NzI18nService, zh_CN } from "ng-zorro-antd/i18n";
@Component({
	selector: "app-page-err-report",
	templateUrl: "./page-err-report.component.html",
	styleUrls: ["./page-err-report.component.scss"],
})
export class PageErrReportComponent implements OnInit {
	date = null;
	SVG = BACKPACK_HI.enums.svg;
	// * * * * *  * * * * *
	allData: iiErrorReport[] = [
		...FakeErrorReportData,
		...FakeErrorReportData,
		...FakeErrorReportData,
		...FakeErrorReportData,
	];
	page = 1;
	pageSize = 5;
	collectionSize = this.allData.length;
	showData: iiErrorReport[] = [];
	isEdit: boolean[] = Array(this.allData.length).fill(false);
	constructor(
		private i18n: NzI18nService,
		private cdr: ChangeDetectorRef,
		private tableServ: HexTableSupportService,
		private modal: NgbModal
	) {
		this.i18n.setLocale(en_US);
	}
	ngOnInit(): void {
		this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
	}

	// * * * * * custom * * * * *
	toggleIsEdit(i: number) {
		this.isEdit[i] = !this.isEdit[i];
	}
	delItem(i: number) {
		this.allData.splice(i, 1);
		this.collectionSize = this.allData.length;
		this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
	}
	sort(key: keyof iiErrorReport) {
		this.isEdit = Array(this.allData.length).fill(false);
		this.tableServ.sort(this.allData, key);
		this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
	}
	// * * * * * required * * * * *
	updatePagination(evt: iiHexTablePagination) {
		this.page = evt.page;
		this.pageSize = evt.pageSize;
		this.collectionSize = this.allData.length;
		this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
	}
}
