import { ID } from "./ngrx.model";
import { Post } from "./../../../shared/interfaces/post";
export type iiEditBlogCategory = {
  sidebarPosition: "start" | "end";
  layout: "classic" | "grid" | "list";
  posts: Post[];
} & ID;
