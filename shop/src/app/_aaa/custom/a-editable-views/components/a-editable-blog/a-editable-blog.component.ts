import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "src/app/shared/interfaces/post";
import { posts } from "src/data/blog-posts";
import { EditBlogCategoryService } from "./../../../../shared/services/edit-blog-category.service";
@Component({
	selector: "app-a-editable-blog",
	templateUrl: "./a-editable-blog.component.html",
	styleUrls: ["./a-editable-blog.component.scss"],
})
export class AEditableBlogComponent implements OnInit, OnDestroy {
	sb = new Subscription();
	sidebarPosition: "start" | "end" = "end";
	layout: "classic" | "grid" | "list" = "classic";
	posts: Post[] = posts;
	constructor(private serv: EditBlogCategoryService) {
		this.watch();
	}
	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.sb.unsubscribe();
	}
	// * * * * *  * * * * *
	watch() {
		const $ = this.serv.getState$().subscribe(res => {
			this.sidebarPosition = res.sidebarPosition;
			this.layout = res.layout;
			this.posts = res.posts;
		});
		this.sb.add($);
	}
	// * * * * *  * * * * *
	getPostCardLayout(): "grid-nl" | "grid-lg" | "list-nl" | "list-sm" {
		return {
			classic: "grid-lg",
			grid: "grid-nl",
			list: "list-nl",
		}[this.layout] as "grid-nl" | "grid-lg" | "list-nl" | "list-sm";
	}
}
