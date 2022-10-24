import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-block-form-rpm",
  templateUrl: "./block-form-rpm.component.html",
  styleUrls: ["./block-form-rpm.component.scss"],
})
export class BlockFormRpmComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}
  initForm() {
    this.form = this.fb.group({
      current: [50],
      isOpen: [true],
      max: [100],
      min: [10],
    });
  }
}
