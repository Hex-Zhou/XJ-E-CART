import { ID } from "./ngrx.model";
export type iiEditHeader = {
  headerLayout: "classic" | "compact";
  dropcartType: "dropdown" | "offcanvas";
} & ID;
