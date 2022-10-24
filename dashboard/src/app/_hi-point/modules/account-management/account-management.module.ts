import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageAccountManagement1Component } from './pages/page-account-management1/page-account-management1.component';
@NgModule({
  declarations: [
    PageAccountManagement1Component
  ],
  imports: [CommonModule],
  exports: [
    PageAccountManagement1Component
  ],
})
export class AccountManagementModule {}
