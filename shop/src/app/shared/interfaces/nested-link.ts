import { Link } from "./link";

export interface NestedLink extends Link {
	label: string;
	url: string;
	external?: boolean;
	target?: "_self" | "_blank";
	items?: NestedLink[];
}
