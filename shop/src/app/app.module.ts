import { /*LOCALE_ID, */ NgModule } from "@angular/core";
import { environment } from "src/environments/environment";
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
// registerLocaleData(localeIt, 'it');
// modules (angular)
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// modules (third-party)
import { CarouselModule } from "ngx-owl-carousel-o";
import { ToastrModule } from "ngx-toastr";

// modules
import { AppRoutingModule } from "./app-routing.module";
import { BlocksModule } from "./modules/blocks/blocks.module";
import { FooterModule } from "./modules/footer/footer.module";
import { HeaderModule } from "./modules/header/header.module";
import { MobileModule } from "./modules/mobile/mobile.module";
import { WidgetsModule } from "./modules/widgets/widgets.module";
import { SharedModule } from "./shared/shared.module";

// components
import { AppComponent } from "./app.component";
import { RootComponent } from "./components/root/root.component";

// pages
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { PageHomeOneComponent } from "./pages/page-home-one/page-home-one.component";
import { PageHomeTwoComponent } from "./pages/page-home-two/page-home-two.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PageOffcanvasCartComponent } from "./pages/page-offcanvas-cart/page-offcanvas-cart.component";
import { AAAModule } from "./_aaa/a-a-a.module";
import { metaReducers, ngrxEffects, reducers } from "./_aaa/shared/store";
@NgModule({
	declarations: [
		// components
		AppComponent,
		RootComponent,
		// pages
		PageHomeOneComponent,
		PageHomeTwoComponent,
		PageNotFoundComponent,
		PageOffcanvasCartComponent,
	],
	imports: [
		// modules (angular)
		BrowserModule.withServerTransition({ appId: "serverApp" }),
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		// modules (third-party)
		CarouselModule,
		ToastrModule.forRoot(),
		// modules
		AppRoutingModule,
		BlocksModule,
		FooterModule,
		HeaderModule,
		MobileModule,
		SharedModule,
		WidgetsModule,
		AAAModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot(ngrxEffects),
		// fire base
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAnalyticsModule,
		AngularFirestoreModule,
	],
	providers: [
		// { provide: LOCALE_ID, useValue: 'it' }
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
