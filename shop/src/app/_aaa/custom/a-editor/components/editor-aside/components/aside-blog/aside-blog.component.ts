import { Subscription } from "rxjs";
import { iiEditBlogCategory } from "./../../../../../../shared/models/edit-blog-category.model";
import { EditBlogCategoryService } from "./../../../../../../shared/services/edit-blog-category.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
	selector: "app-aside-blog",
	templateUrl: "./aside-blog.component.html",
	styleUrls: ["./aside-blog.component.scss"],
})
export class AsideBlogComponent implements OnInit, OnDestroy {
	nowConfig?: Config;
	sb = new Subscription();
	constructor(private serv: EditBlogCategoryService) {
		this.watch();
	}
	ngOnDestroy(): void {
		this.sb.unsubscribe();
	}
	ngOnInit(): void {}
	// * * * * * action * * * * *
	updateState(type: "sidebarPosition" | "layout", val: string) {
		const temp: any = JSON.parse(JSON.stringify(this.nowConfig));
		temp[type] = val;
		this.serv.updateState(temp);
	}
	// * * * * * init * * * * *
	watch() {
		const $ = this.serv.getState$().subscribe(config => (this.nowConfig = config));
		this.sb.add($);
	}
}
type Config = iiEditBlogCategory;
