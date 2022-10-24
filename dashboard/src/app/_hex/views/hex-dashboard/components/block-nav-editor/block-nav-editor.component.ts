import { ID } from "./../../../../shared/models/core/ngrx.model";
import { Subscription } from "rxjs";
import { ApiNavLinkService } from "../../../../shared/apis/api-nav-link.service";
import { ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren } from "@angular/core";
import { NzPopoverDirective } from "ng-zorro-antd/popover";
import { iiNavigationLink, iiNestedLink } from "./../../../../shared/models/navigation-link.model";

@Component({
	selector: "app-block-nav-editor",
	templateUrl: "./block-nav-editor.component.html",
	styleUrls: ["./block-nav-editor.component.scss"],
})
export class BlockNavEditorComponent implements OnInit, OnDestroy {
	@ViewChildren(NzPopoverDirective) popRefList: QueryList<NzPopoverDirective>;
	navLinks: Nav[] = [];
	currNavIdx = -1;
	currNavProp?: Nav;
	currNestedInfo?: NestedInfo;
	sb = new Subscription();
	// * * * * *  * * * * *
	constructor(private api: ApiNavLinkService, private cdr: ChangeDetectorRef) {}
	ngOnDestroy(): void {
		this.sb.unsubscribe();
	}
	ngOnInit(): void {
		this.api.getAll().subscribe(res => {
			this.navLinks = res;
			this.cdr.detectChanges();
			this.reIFrame();
		});
	}
	// * * * * *  * * * * *

	setCurrNav(idx: number) {
		this.currNavIdx = idx;
		this.currNavProp = JSON.parse(JSON.stringify(this.navLinks[idx]));
	}
	setCurrNestedInfo(nested: Nested, parent: any, idx: number) {
		const temp: NestedInfo = { nested, parent, idx };
		this.currNestedInfo = temp;
	}
	// * * * * * api * * * * *
	addNav() {
		const temp: Omit<Nav, "id"> = { label: "未命名", url: "", menu: { type: "menu", items: [] } };
		this.api.add(temp).subscribe(id => {
			this.navLinks.push({ ...temp, id });
			this.cdr.detectChanges();
			this.reIFrame();
		});
	}
	deleteNav() {
		this.api.delete(this.navLinks[this.currNavIdx].id).subscribe(_ => {
			this.navLinks.splice(this.currNavIdx, 1);
			this.reIFrame();
			this.hideAllPop();
		});
	}
	updateNav() {
		if (this.currNavProp?.menu && !this.currNavProp.menu.items) this.currNavProp.menu = { items: [], type: "menu" };
		if (this.currNavProp) {
			this.api.update(this.currNavProp).subscribe(_ => {
				this.navLinks[this.currNavIdx] = this.currNavProp!;
				this.hideAllPop();
				this.reIFrame();
			});
		}
	}
	// * * * * *  * * * * *
	addNested(parent: any) {
		if (!this.currNavProp) return;
		parent.items.push({ label: "未命名子項目", url: "", items: [] });
		this.api.update(this.navLinks[this.currNavIdx]).subscribe(_ => this.reIFrame());
	}
	deleteNested() {
		if (!this.currNestedInfo) return;
		const temp = this.currNestedInfo as NestedInfo;
		(temp.parent.items as any[]).splice(temp.idx, 1);
		if (!this.currNavProp) return;
		this.api.update(this.navLinks[this.currNavIdx]).subscribe(_ => this.reIFrame());
		this.hideAllPop();
	}
	updateNested() {
		if (!this.currNestedInfo) return;
		const temp = this.currNestedInfo as NestedInfo;
		if (temp.nested.items && !temp.nested.items) temp.nested.items = [];
		if (temp.nested) temp.parent.items[temp.idx] = temp.nested;
		if (!this.currNavProp) return;
		this.api.update(this.navLinks[this.currNavIdx]).subscribe(_ => this.reIFrame());
		this.hideAllPop();
	}
	// * * * * *  * * * * *
	private hideAllPop() {
		this.popRefList.forEach(item => item.hide());
		this.cdr.detectChanges();
	}
	private reIFrame() {
		const target = document.getElementById("frameZ") as HTMLIFrameElement;
		target.src = target.src;
	}
}
type Nav = iiNavigationLink & ID;
type Nested = iiNestedLink;
interface NestedInfo {
	nested: Nested;
	parent: any;
	idx: number;
}
