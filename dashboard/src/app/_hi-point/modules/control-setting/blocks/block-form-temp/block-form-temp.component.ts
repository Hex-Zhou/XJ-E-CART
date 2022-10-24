import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-block-form-temp",
  templateUrl: "./block-form-temp.component.html",
  styleUrls: ["./block-form-temp.component.scss"],
})
export class BlockFormTempComponent implements OnInit {
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
