import { Link } from "./link";
import { Menu } from "./menu";
import { Megamenu } from "./megamenu";

export interface NavigationLink extends Link {
	label: string;
	url: string;
	external?: boolean;
	target?: "_self" | "_blank";
	menu?: Menu | Megamenu;
}
