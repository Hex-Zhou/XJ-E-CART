import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { iiNavItem } from "../../models/core/nav-item.model";

@Component({
  selector: "app-nav-tabs-group",
  templateUrl: "./nav-tabs-group.component.html",
  styleUrls: ["./nav-tabs-group.component.scss"],
})
export class NavTabsGroupComponent implements OnInit {
  @Input() navItemList: iiNavItem[] = [];
  @Output() itemClick = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  clickEmit(id: number) {
    this.itemClick.emit(id);
  }
}
