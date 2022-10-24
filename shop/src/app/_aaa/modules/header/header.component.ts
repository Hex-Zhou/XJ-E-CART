import { Component, Input } from "@angular/core";
import { StoreService } from "src/app/shared/services/store.service";
import { DropcartType } from "./components/dropcart/dropcart.component";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() dropcartType: DropcartType = "dropdown";
  @Input() layout: "classic" | "compact" = "classic";
  constructor(public store: StoreService) {}
}
