import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-block-open-close",
  templateUrl: "./block-open-close.component.html",
  styleUrls: ["./block-open-close.component.scss"],
})
export class BlockOpenCloseComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}
  initForm() {
    this.form = this.fb.group({
      open1: [true],
      open2: [true],
      open3: [false],
      open4: [true],
      open5: [true],
      open6: [false],
      open7: [true],
      open8: [false],
      open9: [false],
    });
  }
}
