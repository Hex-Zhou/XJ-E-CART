import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-modal-add",
 templateUrl: "./modal-add.component.html",
 styleUrls: ["./modal-add.component.scss"],
})
export class ModalAddComponent implements OnInit {
 constructor(private modal: NgbModal) {}
 ngOnInit(): void {}
 close() {
  this.modal.dismissAll();
 }
}
