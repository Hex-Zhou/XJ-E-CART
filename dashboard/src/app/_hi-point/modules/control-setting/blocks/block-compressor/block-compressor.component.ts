import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-block-compressor",
  templateUrl: "./block-compressor.component.html",
  styleUrls: ["./block-compressor.component.scss"],
})
export class BlockCompressorComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {}
  initForm() {
    this.form = this.fb.group({
      isOpen: [true],
    });
  }
}
