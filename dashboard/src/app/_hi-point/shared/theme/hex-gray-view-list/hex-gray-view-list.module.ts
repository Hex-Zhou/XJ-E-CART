import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HexGrayViewListComponent } from "./hex-gray-view-list.component";
import { HexGrayViewItemDirective } from "./hex-gray-view-item.directive";

@NgModule({
 declarations: [HexGrayViewListComponent, HexGrayViewItemDirective],
 imports: [CommonModule],
 exports: [HexGrayViewListComponent, HexGrayViewItemDirective],
})
export class HexGrayViewListModule {}
