import { Component, OnInit } from "@angular/core";
import { iiNavItem } from "src/app/_hi-point/shared/models/core/nav-item.model";
@Component({
  selector: "app-block-tab-group",
  templateUrl: "./block-tab-group.component.html",
  styleUrls: ["./block-tab-group.component.scss"],
})
export class BlockTabGroupComponent implements OnInit {
  dataList = fakeDataList;
  constructor() {}
  ngOnInit(): void {}
}
const fakeDataList: iiNavItem[] = [
  {
    id: 1,
    title: "全部設備",
  },
  {
    id: 2,
    title: "Group01",
  },
  {
    id: 3,
    title: "Group02",
  },
  {
    id: 4,
    title: "Group03",
  },
  {
    id: 5,
    title: "Group04",
  },
  {
    id: 6,
    title: "Group05",
  },
  {
    id: 7,
    title: "Group06",
  },
];
