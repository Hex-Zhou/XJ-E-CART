import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-exception",
  templateUrl: "./modal-exception.component.html",
  styleUrls: ["./modal-exception.component.scss"],
})
export class ModalExceptionComponent implements OnInit {
  data = fakeException;
  constructor(private modal: NgbModal) {}
  closeModal() {
    this.modal.dismissAll();
  }
  ngOnInit(): void {}
}
interface iException {
  title: string;
  reason_desc: string;
  fix_desc: string;
}
const fakeException: iException = {
  title: "[T01]溫度過高",
  reason_desc: "溫度實際值高於設定值加上限警報值",
  fix_desc:
    "1.控制設定->壓縮機開關 是否開啟  <br> 2.控制設定->溫度上限警報 <br> 3.查詢故障排除手冊(第X章)",
};
