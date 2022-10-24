import { ID } from "./ngrx.model";
// * * * * * export * * * * *
export interface iiEditHomeSort {
  id: string;
  id_list: string[];
}
export type iiEditHomeEntity = (
  | iiBlockFeatures
  | iiSlideshow
  | iiCarousel
  | iiPosts
  | iiCategories
  | iiProdColumns
  | iiBrands
) &
  ID;
// * * * * * interior * * * * *
interface iiBlockFeatures {
  type: "features";
  options?: {
    layout?: "classic" | "boxed";
  };
}
interface iiSlideshow {
  type: "slideshow";
}
interface iiBrands {
  type: "brands";
}
interface iiCarousel {
  type: "carousel";
  options?: {
    rows?: number;
    header?: string;
    layout?: "grid-4" | "grid-4-sm" | "grid-5" | "horizontal";
  };
}
interface iiPosts {
  type: "posts";
  options?: {
    header?: string;
    layout?: "list-sm" | "grid-nl";
  };
}
interface iiCategories {
  type: "categories";
  options?: {
    header?: string;
    layout?: "classic" | "compact";
  };
}
interface iiProdColumns {
  type: "prodColumns";
  items?: iiProductColumnsItem[];
}
interface iiProductColumnsItem {
  header?: string;
}
