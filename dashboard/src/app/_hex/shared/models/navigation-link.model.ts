export interface iiNavigationLink {
	label: string;
	url: string;
	external?: boolean;
	target?: "_self" | "_blank";
	menu?: iiMenu;
}
export interface iiMenu {
	type: "menu";
	items: iiNestedLink[];
}
export interface iiNestedLink {
	label: string;
	url: string;
	external?: boolean;
	target?: "_self" | "_blank";
	items?: iiNestedLink[];
}
