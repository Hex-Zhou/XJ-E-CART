import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { posts } from "./../../../../data/blog-posts";
import { ApiEditBlogCategoryService } from "./../apis/api-edit-blog-category.service";
import { iiEditBlogCategory } from "./../models/edit-blog-category.model";
@Injectable({
	providedIn: "root",
})
export class EditBlogCategoryService {
	private state = new BehaviorSubject<Category | null>(null);
	constructor(private serv: ApiEditBlogCategoryService) {
		this.initState();
	}
	// * * * * * value * * * * *
	getState$() {
		return this.state.asObservable().pipe(filter(val => val !== null)) as Observable<Category>;
	}
	private nowState() {
		return JSON.parse(JSON.stringify(this.state.value)) as Category;
	}
	// * * * * * action * * * * *
	updateState(newVal: Category) {
		const id = this.nowState().id!;
		this.serv.update({ ...newVal, id }).subscribe(_ => this.state.next({ ...newVal, id }));
	}
	initState() {
		const add$ = () => {
			const temp: Omit<Category, "id"> = {
				layout: "grid",
				sidebarPosition: "start",
				posts: posts,
			};
			return this.serv.add(temp).pipe(map(id => ({ ...temp, id })));
		};
		this.serv
			.getAll()
			.pipe(
				switchMap(res => {
					if (res.length > 0) return of(res[0]);
					return add$();
				})
			)
			.subscribe(res => {
				this.state.next(res);
			});
	}
}
type Category = iiEditBlogCategory;
