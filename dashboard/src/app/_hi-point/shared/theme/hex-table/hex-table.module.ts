import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HexTableCellDirective, TableCellTimeComponent } from "./hex-table-cell.directive";
import { HexTableHeaderDirective } from "./hex-table-header.directive";
import {
  HexProjectTableHeadDirective,
  HexProjectTableRowDirective,
  HexTableComponent,
} from "./hex-table.component";
import { HexTableFooterComponent } from "./hex-table-footer.component";
import { NzSelectModule } from "ng-zorro-antd/select";

@NgModule({
  declarations: [
    TableCellTimeComponent,
    //
    HexTableComponent,
    HexTableHeaderDirective,
    HexTableCellDirective,
    HexProjectTableHeadDirective,
    HexProjectTableRowDirective,
    HexTableFooterComponent,

    //
  ],
  imports: [CommonModule, NzSelectModule, NgbPaginationModule, FormsModule, ReactiveFormsModule],
  exports: [
    HexTableComponent,
    HexTableHeaderDirective,
    HexTableCellDirective,
    HexProjectTableHeadDirective,
    HexProjectTableRowDirective,
    HexTableFooterComponent,
  ],
})
export class HexTableModule {}
