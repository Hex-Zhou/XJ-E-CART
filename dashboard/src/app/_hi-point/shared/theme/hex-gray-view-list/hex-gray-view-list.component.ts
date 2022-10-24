import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-hex-gray-view-list",
 template: `
  <div class="panel d-flex flex-column gap-7 py-7 px-5">
   <ng-content select="[row]"></ng-content>
  </div>
 `,
 styles: [
  `
   .panel {
    background-color: #f8f8f8;
    max-height: 500px;
    overflow: auto;
    border-radius: 1rem;
   }
  `,
 ],
})
export class HexGrayViewListComponent implements OnInit {
 constructor() {}
 ngOnInit(): void {}
}
