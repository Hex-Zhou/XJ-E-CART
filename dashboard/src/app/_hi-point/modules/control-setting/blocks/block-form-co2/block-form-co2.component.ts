import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-block-form-co2",
  templateUrl: "./block-form-co2.component.html",
  styleUrls: ["./block-form-co2.component.scss"],
})
export class BlockFormCo2Component implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}
  initForm() {
    this.form = this.fb.group({
      current: [50],
      isOpen: [true],
    });
  }
}
