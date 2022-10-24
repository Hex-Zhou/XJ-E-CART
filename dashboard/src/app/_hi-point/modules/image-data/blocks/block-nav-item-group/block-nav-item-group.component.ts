import { iiNavItem } from "../../../../shared/models/core/nav-item.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-block-nav-item-group",
  templateUrl: "./block-nav-item-group.component.html",
  styleUrls: ["./block-nav-item-group.component.scss"],
})
export class BlockNavItemGroupComponent implements OnInit {
  dataList = fakeDataList;
  constructor() {}

  ngOnInit(): void {}
}
const fakeDataList: iiNavItem[] = [
  { id: 1, title: "攝影機01" },
  { id: 1, title: "攝影機02" },
  { id: 1, title: "攝影機03" },
  { id: 1, title: "攝影機04" },
  { id: 1, title: "攝影機05" },
];
