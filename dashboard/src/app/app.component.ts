import { BACKPACK_HI } from "./_hi-point/shared/backpack.class";
import { Router } from "@angular/router";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TranslationService } from "./modules/i18n";
// language list
import { locale as enLang } from "./modules/i18n/vocabs/en";
import { locale as chLang } from "./modules/i18n/vocabs/ch";
import { locale as esLang } from "./modules/i18n/vocabs/es";
import { locale as jpLang } from "./modules/i18n/vocabs/jp";
import { locale as deLang } from "./modules/i18n/vocabs/de";
import { locale as frLang } from "./modules/i18n/vocabs/fr";

@Component({
	// tslint:disable-next-line:component-selector
	selector: "body[root]",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(private translationService: TranslationService, private router: Router) {
		// register translations
		this.translationService.loadTranslations(enLang, chLang, esLang, jpLang, deLang, frLang);
		this.watchCheat();
	}

	ngOnInit() {}

	watchCheat() {
		const goToDev = () => this.router.navigate([BACKPACK_HI.enums.route.devSvg]);
		const devAry = "fuck2022".split("");
		let devCurr = 0;
		window.addEventListener("keydown", evt => {
			if (evt.key === devAry[devCurr]) {
				devCurr++;
				if (devCurr === devAry.length) goToDev();
			} else {
				devCurr = 0;
			}
		});
	}
}
