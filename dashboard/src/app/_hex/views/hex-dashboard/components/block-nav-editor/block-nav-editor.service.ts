import { Injectable } from "@angular/core";
import { ApiNavLinkService } from "src/app/_hex/shared/apis/api-nav-link.service";

@Injectable({
	providedIn: "root",
})
export class BlockNavEditorService {
	constructor(private api: ApiNavLinkService) {}
}
