import { BACKPACK_HI } from "../../../../shared/backpack.class";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription, first } from "rxjs";
import { AuthService, UserModel } from "src/app/modules/auth";
@Component({
	selector: "app-page-login1",
	templateUrl: "./page-login1.component.html",
	styleUrls: ["./page-login1.component.scss"],
})
export class PageLogin1Component implements OnInit, OnDestroy {
	@Input() titleType: "title" | "image" = "image";
	bp = BACKPACK_HI;
	picList = BACKPACK_HI.enums.pic;
	//
	defaultAuth: any = {
		email: "admin@demo.com",
		password: "demo",
	};
	loginForm: FormGroup;
	hasError: boolean;
	returnUrl: string;
	isLoading$: Observable<boolean>;
	private unsubscribe: Subscription[] = [];
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.isLoading$ = this.authService.isLoading$;
		if (this.authService.currentUserValue) {
			this.router.navigate(["/"]);
		}
	}
	ngOnInit(): void {
		this.initForm();
		this.returnUrl = this.route.snapshot.queryParams["returnUrl".toString()] || "/";
	}
	get f() {
		return this.loginForm.controls;
	}
	initForm() {
		this.loginForm = this.fb.group({
			email: [
				this.defaultAuth.email,
				Validators.compose([Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(320)]),
			],
			password: [
				this.defaultAuth.password,
				Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			],
		});
	}
	submit() {
		this.hasError = false;
		const loginSubscr = this.authService
			.login(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe((user: UserModel | undefined) => {
				if (user) {
					this.router.navigate([this.returnUrl]);
				} else {
					this.hasError = true;
				}
			});
		this.unsubscribe.push(loginSubscr);
	}
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
