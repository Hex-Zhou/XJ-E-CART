import { BACKPACK_HI } from "./../../shared/backpack.class";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageErrReportComponent } from "./pages/page-err-report/page-err-report.component";

@NgModule({
	declarations: [PageErrReportComponent],
	imports: [CommonModule, BACKPACK_HI.commonModules],
})
export class ErrReportModule {}
