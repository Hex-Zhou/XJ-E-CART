import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HexTableSupportService } from "src/app/_hi-point/shared/theme/hex-table/hex-table-support.service";
import { iiHexTablePagination } from "src/app/_hi-point/shared/theme/hex-table/model/hex-table-pagination";
import { FakeEquipData } from "./../../../../shared/data/equip.data";
import { iiEquip } from "./../../../../shared/models/equip.model";

@Component({
 selector: "app-block-group-table",
 templateUrl: "./block-group-table.component.html",
 styleUrls: ["./block-group-table.component.scss"],
 providers: [HexTableSupportService],
})
export class BlockGroupTableComponent implements OnInit {
 allData: iiEquip[] = [...FakeEquipData, ...FakeEquipData, ...FakeEquipData, ...FakeEquipData, ...FakeEquipData];
 page = 1;
 pageSize = 5;
 collectionSize = this.allData.length;
 showData: iiEquip[] = [];
 isEdit: boolean[] = Array(this.allData.length).fill(false);
 // * * * * * life * * * * *
 constructor(private cdr: ChangeDetectorRef, private tableServ: HexTableSupportService) {}
 ngOnInit(): void {
  this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
 }
 // * * * * * custom * * * * *
 toggleIsEdit(i: number) {
  this.isEdit[i] = !this.isEdit[i];
 }
 delItem(i: number) {
  this.allData.splice(i, 1);
  this.collectionSize = this.allData.length;
  this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
 }
 sort(key: keyof iiEquip) {
  this.isEdit = Array(this.allData.length).fill(false);
  this.tableServ.sort(this.allData, key);
  this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
 }
 // * * * * * required * * * * *
 updatePagination(evt: iiHexTablePagination) {
  this.page = evt.page;
  this.pageSize = evt.pageSize;
  this.collectionSize = this.allData.length;
  this.showData = this.tableServ.getShowData(this.allData, this.page, this.pageSize);
 }
}
