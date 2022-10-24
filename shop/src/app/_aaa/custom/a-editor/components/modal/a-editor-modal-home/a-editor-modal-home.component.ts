import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { iiEditHomeEntity } from "../../../../../shared/models/edit-home.model";
import { EditHomeService } from "./../../../../../shared/services/edit-home.service";

@Component({
  selector: "app-a-editor-modal-home",
  templateUrl: "./a-editor-modal-home.component.html",
  styleUrls: ["./a-editor-modal-home.component.scss"],
})
export class AEditorModalHomeComponent implements OnInit {
  selectDefValue = "初始的狀態";
  item!: iiEditHomeEntity;
  form: FormGroup = new FormGroup({});
  // * * * * * life * * * * *
  constructor(
    private fb: FormBuilder,
    private modal: NgbModal,
    private editHomeServ: EditHomeService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.patchForm();
  }
  // * * * * * interaction * * * * *
  deleteBlock() {
    this.editHomeServ.delEntity(this.item.id);
    this.modal.dismissAll();
  }
  editBlock() {
    const hasNotSelect = () => {
      let isNotSelected = true;
      Object.entries(this.form.getRawValue() as object).forEach(([, val]) => {
        if (val === this.selectDefValue) isNotSelected = false;
      });
      return isNotSelected;
    };
    if (this.form.valid && hasNotSelect()) {
      let body = JSON.parse(JSON.stringify(this.item));
      body.options = this.form.getRawValue();
      this.editHomeServ.updateEntity(body);
      this.modal.dismissAll();
    } else {
      alert("未填寫完整，無法更新");
    }
  }
  // * * * * * logic control * * * * *
  initForm() {
    if (this.item === null) return;
    switch (this.item.type) {
      case "brands":
        break;
      case "carousel":
        this.form = this.fb.group({
          header: [""],
          layout: [this.selectDefValue, Validators.required],
          rows: [1, [Validators.required, Validators.max(3), Validators.min(1)]],
        });
        break;
      case "categories":
        this.form = this.fb.group({
          header: [""],
          layout: [this.selectDefValue, Validators.required],
        });
        break;
      case "features":
        this.form = this.fb.group({
          layout: [this.selectDefValue, Validators.required],
        });
        break;
      case "posts":
        this.form = this.fb.group({
          header: [""],
          layout: [this.selectDefValue, Validators.required],
        });
        break;
      case "slideshow":
        break;
      case "prodColumns":
        break;
    }
  }
  patchForm() {
    const temp: any = this.item;
    // 刪除無效值 防止汙染表單
    if (temp.options) {
      Object.entries(temp.options).forEach(([key, val]) => {
        if (val === "") delete temp.options[key];
      });
    }
    this.form.patchValue(temp.options);
  }
}
