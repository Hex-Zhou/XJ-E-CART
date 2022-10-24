import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
 selector: "app-modal-device-config",
 templateUrl: "./modal-device-config.component.html",
 styleUrls: ["./modal-device-config.component.scss"],
})
export class ModalDeviceConfigComponent implements OnInit {
 data = fakeData;
 constructor(private modal: NgbModal) {}
 ngOnInit(): void {}
 closeModal() {
  this.modal.dismissAll();
 }
}

const fakeData: iiData[] = [
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
 { title: "A-0001 設備AAAA", agent: "代理商A", check: true },
 { title: "A-0001 設備BBBB", agent: "代理商b", check: true },
 { title: "A-0001 設備CCCC", agent: "代理商c", check: false },
 { title: "A-0001 設備DDDD", agent: "代理商d", check: true },
 { title: "A-0001 設備EEEE", agent: "-", check: false },
];
interface iiData {
 title: string;
 agent: string;
 check: boolean;
}
