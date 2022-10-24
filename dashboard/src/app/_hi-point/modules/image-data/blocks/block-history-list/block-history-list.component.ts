import { ModalDownloadComponent } from "./../../components/modal-download/modal-download.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-block-history-list",
	templateUrl: "./block-history-list.component.html",
	styleUrls: ["./block-history-list.component.scss"],
})
export class BlockHistoryListComponent implements OnInit {
	imgEnum = BACKPACK_HI.enums.pic;
	svgEnum = BACKPACK_HI.enums.svg;
	allImgList: string[] = [];
	showImgList: string[] = [];
	// * * * * * pagination * * * * *
	perPage = 12;
	allPageList: any[] = [];
	currentPage: number = 0;
	pageBatch: number = 0;
	// * * * * * life * * * * *
	constructor(private modal: NgbModal) {}
	ngOnInit(): void {
		this.allImgList = Array(100).fill(this.imgEnum.demoLS);
		const pageCount = Math.ceil(this.allImgList.length / this.perPage);
		this.allPageList = Array(pageCount).fill(false);
		this._updateShowImgList();
	}
	// * * * * *  * * * * *
	openModal() {
		const config = BACKPACK_HI.configs.ngbModal.md;
		const ref = this.modal.open(ModalDownloadComponent, config);
	}
	// * * * * *  * * * * *
	changeCurrentPage(val: number) {
		if (val > this.allPageList.length - 1) val = this.allPageList.length - 1;
		if (val < 0) val = 0;
		this.currentPage = val;
		this._updateShowImgList();
	}
	changeShowPage(val: number) {
		const max = Math.ceil((this.allPageList.length - 1) / 5) - 1;
		this.allPageList.length - 1;
		if (val > max) val = max;
		if (val < 0) val = 0;
		this.pageBatch = val;
	}
	private _updateShowImgList() {
		const start = this.currentPage * this.perPage;
		const end = start + this.perPage;
		this.showImgList = [...this.allImgList].slice(start, end);
	}
}
