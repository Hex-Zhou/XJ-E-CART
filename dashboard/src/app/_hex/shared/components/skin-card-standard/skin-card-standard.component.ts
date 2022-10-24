import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-skin-card-standard",
  templateUrl: "./skin-card-standard.component.html",
  styleUrls: ["./skin-card-standard.component.scss"],
})
export class SkinCardStandardComponent implements OnInit {
  @Input() cardTitle: string | null = null;
  @Input() cardSubtitle: string | null = null;
  @Input() extraBodyCSS = "";
  @Input() extraCardCSS = "";
  @Input() extraToolBarCSS = "";
  constructor() {}

  ngOnInit(): void {}
}
