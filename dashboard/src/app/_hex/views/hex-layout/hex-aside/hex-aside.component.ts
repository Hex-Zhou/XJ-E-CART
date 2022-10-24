import { Component, OnInit } from "@angular/core";
import { BACKPACK } from "src/app/_hex/shared/backpack.class";

@Component({
 selector: "app-hex-aside",
 templateUrl: "./hex-aside.component.html",
 styleUrls: ["./hex-aside.component.scss"],
})
export class HexAsideComponent implements OnInit {
 routeList = BACKPACK.data.routeList;
 constructor() {}
 ngOnInit(): void {}
}
