import { ModalExceptionComponent } from "./components/modal-exception/modal-exception.component";
import { Component, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BACKPACK_HI } from "../../../../shared/backpack.class";

@Component({
	selector: "app-block-warning-content",
	templateUrl: "./block-warning-content.component.html",
	styleUrls: ["./block-warning-content.component.scss"],
})
export class BlockWarningContentComponent implements OnInit {
	@Input() mode: "text" | "card" = "card";
	bp = BACKPACK_HI;
	exceptionSelected = "none";
	allDataList = fakeDataList;
	showDataList = fakeDataList;
	exceptionList: string[] = [];
	// * * * * * life * * * * *
	constructor(private modal: NgbModal) {}
	ngOnInit(): void {
		this.initExceptionList();
	}
	// * * * * * interaction * * * * *
	openExceptionModal() {
		const opt = this.bp.configs.ngbModal.lg;
		const ref = this.modal.open(ModalExceptionComponent, opt);
		ref.componentInstance;
	}
	selectException() {
		console.log(`正在測試...`, this.exceptionSelected);
		if (this.exceptionSelected === "none") {
			this.showDataList = this.allDataList;
		} else {
			this.showDataList = this.allDataList.filter(e => e.status.includes(this.exceptionSelected));
		}
	}
	// * * * * * private * * * * *
	initExceptionList() {
		this.allDataList.forEach(e => {
			if (this.exceptionList.includes(e.status)) return;
			this.exceptionList.push(e.status);
		});
	}
}
interface iData {
	title: string;
	time: string;
	status: string;
}
const fakeDataList: iData[] = [
	{ title: "環境設備A4", time: "2022/07/10 13:50:21", status: "溫度過低" },
	{ title: "環境設備A1", time: "2022/07/10 17:10:12", status: "電源異常" },
	{ title: "環境設備B6", time: "2022/07/10 05:11:27", status: "溫度過低" },
	{ title: "環境設備B6", time: "2022/07/10 05:11:27", status: "溫度過低" },
	{ title: "環境設備B6", time: "2022/07/10 05:11:27", status: "溫度過低" },
	{ title: "環境設備B6", time: "2022/07/10 05:11:27", status: "溫度過低" },
];
