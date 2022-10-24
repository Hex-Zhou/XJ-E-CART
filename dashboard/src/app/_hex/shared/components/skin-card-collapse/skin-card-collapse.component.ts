import { Component, Input, OnInit } from "@angular/core";
import { BACKPACK } from "../../backpack.class";

@Component({
  selector: "app-skin-card-collapse",
  templateUrl: "./skin-card-collapse.component.html",
  styleUrls: ["./skin-card-collapse.component.scss"],
})
export class SkinCardCollapseComponent implements OnInit {
  @Input() cardTitle = "";
  @Input() bodyClass = "";
  @Input() collapseBodyClass = "";
  SVG = BACKPACK.enums.svg;
  isExpand = true;
  // * * * * * life * * * * *
  constructor() {}
  ngOnInit(): void {}
  // * * * * * interaction * * * * *
  toggleIsExpand() {
    this.isExpand = !this.isExpand;
  }
}
