import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styleUrls: ["./form-control.component.scss"],
})
export class FormControlComponent implements OnInit {
  @Input() ctrl: iFormControl = {
    label: null,
    controlName: null,
    formGroup: null,
    type: "number",
  };
  constructor() {}
  ngOnInit(): void {}
}
export interface iFormControl {
  label: string | null;
  controlName: string | null;
  formGroup: FormGroup | null;
  type: "number" | "switch";
  numberParam?: iNumberParam;
  switchParam?: iSwitchParam;
  isAttachContent?: boolean;
}
interface iNumberParam {
  oldLabel?: string;
  oldVal?: number;
  min?: number;
  max?: number;
  step?: number;
}
interface iSwitchParam {
  ms?: "auto" | 0;
  switchText?: string;
}
