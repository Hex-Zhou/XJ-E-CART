import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-block-form-led",
  templateUrl: "./block-form-led.component.html",
  styleUrls: ["./block-form-led.component.scss"],
})
export class BlockFormLedComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}
  initForm() {
    this.form = this.fb.group({
      isOpen: [true],
      led01: [0],
      led02: [0],
      led03: [0],
      led04: [0],
    });
  }
}
