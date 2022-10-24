import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { iiEditBlogCategory } from "./../models/edit-blog-category.model";
import { ApiBaseService } from "./base/api-base.service";

@Injectable({
  providedIn: "root",
})
export class ApiEditBlogCategoryService extends ApiBaseService<TYPE> {
  protected override localKey: string = "EDIT-BLOG-CATEGORY";
  protected override demoMode: "local" | "fire" = "fire";
  getAll() {
    return this.getAllDemo().pipe(delay(ms));
  }
  getByID(id: string) {
    return this.getByIDDemo(id).pipe(delay(ms));
  }
  add(body: Omit<TYPE, "id">) {
    return this.addDemo(body).pipe(delay(ms));
  }
  update(body: TYPE) {
    return this.updateDemo(body).pipe(delay(ms));
  }
  delete(id: string) {
    return this.deleteDemo(id).pipe(delay(ms));
  }
}
type TYPE = iiEditBlogCategory;
const ms = 0;
