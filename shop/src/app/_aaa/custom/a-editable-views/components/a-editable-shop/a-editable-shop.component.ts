import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-a-editable-shop",
  templateUrl: "./a-editable-shop.component.html",
  styleUrls: ["./a-editable-shop.component.scss"],
})
export class AEditableShopComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
