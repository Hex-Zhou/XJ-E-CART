import { ModalAddComponent } from "./../../components/modal-add/modal-add.component";
import { ModalDeviceConfigComponent } from "./../../components/modal-device-config/modal-device-config.component";
import { BACKPACK_HI } from "./../../../../shared/backpack.class";
import { FakeAgentData } from "./../../../../shared/data/agent.data";
import { iiAgent } from "./../../../../shared/models/agent.model";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HexTableSupportService } from "src/app/_hi-point/shared/theme/hex-table/hex-table-support.service";
import { iiHexTablePagination } from "src/app/_hi-point/shared/theme/hex-table/model/hex-table-pagination";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-page-agent",
	templateUrl: "./page-agent.component.html",
	styleUrls: ["./page-agent.component.scss"],
})
export class PageAgentComponent implements OnInit {
	getDuoTune = BACKPACK_HI.getDuoTune;
	// * * * * *  * * * * *
	allData: iiAgent[] = [...FakeAgentData, ...FakeAgentData, ...FakeAgentData, ...FakeAgentData];
	page = 1;
	pageSize = 5;
	collectionSize = this.allData.length;
	showData: iiAgent[] = [];
	isEdit: boolean[] = Array(this.allData.length).fill(false);
	constructor(private cdr: ChangeDetectorRef, private tableServ: HexTableSupportService, private modal: NgbModal) {}
	ngOnInit(): void {
		this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
	}
	// * * * * * interaction * * * * *
	openDeviceModal() {
		const config = BACKPACK_HI.configs.ngbModal.lg;
		const ref = this.modal.open(ModalDeviceConfigComponent, config);
	}
	openAddModal() {
		const config = BACKPACK_HI.configs.ngbModal.md;
		const ref = this.modal.open(ModalAddComponent, config);
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
	sort(key: keyof iiAgent) {
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
