import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-block-form-humidity",
  templateUrl: "./block-form-humidity.component.html",
  styleUrls: ["./block-form-humidity.component.scss"],
})
export class BlockFormHumidityComponent implements OnInit {
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
