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
import { AuthGuard } from './guards/auth.guard';

const ROUTES = [
	{ path: '', component: PageHomeComponent},
	{ path: 'verify', component: PageVerifyComponent},
	{ path: 'dashboard', loadChildren: './modules/home/home.module#HomeModule', canActivate:[AuthGuard]},

];

@NgModule({
	declarations: [
		AppComponent,
		PageHomeComponent,
		PageVerifyComponent,
		ModalSignInComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(ROUTES),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		ApiServiceService,
		VerifyService,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
