import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-big-label",
  templateUrl: "./big-label.component.html",
  styleUrls: ["./big-label.component.scss"],
})
export class BigLabelComponent implements OnInit {
  @Input() labelText: string;
  constructor() {}
  ngOnInit(): void {}
}
