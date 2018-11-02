import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

/* Pages Import */
import { PageHomeComponent } from './components/pages/page-home/page-home.component'
import { PageVerifyComponent } from './components/pages/page-verify/page-verify.component';

/*Elements Import */
import { ModalSignInComponent } from './components/elements/modals/modal-sign-in/modal-sign-in.component'

import { ApiServiceService } from './services/api-service.service';
import { VerifyService } from './services/verify.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Ng5SliderModule } from 'ng5-slider';
import { PageCheckoutComponent } from './components/pages/page-checkout/page-checkout.component';
import { PageCheckinComponent } from './components/pages/page-checkin/page-checkin.component';

const ROUTES = [
	{ path: '', component: PageHomeComponent},
	{ path: 'verify', component: PageVerifyComponent},
	{ path: 'dashboard', loadChildren: './modules/home/home.module#HomeModule'},
	{ path: 'checkout', component: PageCheckoutComponent},
	{ path: 'checkin', component: PageCheckinComponent}

];

@NgModule({
	declarations: [
		AppComponent,
		PageHomeComponent,
		PageVerifyComponent,
		ModalSignInComponent,
		PageCheckoutComponent,
		PageCheckinComponent,
		
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(ROUTES),
		Ng5SliderModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		ApiServiceService,
		VerifyService],
	bootstrap: [AppComponent]
})
export class AppModule { }
