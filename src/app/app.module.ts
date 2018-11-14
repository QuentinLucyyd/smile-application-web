import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

/* Pages Import */
import { PageHomeComponent } from './components/pages/page-home/page-home.component'
import { PageVerifyComponent } from './components/pages/page-verify/page-verify.component';

/*Elements Import */
import { ModalSignInComponent } from './components/elements/modals/modal-sign-in/modal-sign-in.component'

import { ApiServiceService } from './services/api-service.service';
import { VerifyService } from './services/verify.service';
import { NotificationsService } from './services/notifications.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';

const ROUTES = [
	{ path: '', component: PageHomeComponent},
	{ path: 'verify', component: PageVerifyComponent},
	{ path: 'dashboard', loadChildren: './modules/home/home.module#HomeModule', canActivate:[AuthGuard]},

];

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
	position: {
		  horizontal: {
			  position: 'left',
			  distance: 12
		  },
		  vertical: {
			  position: 'bottom',
			  distance: 12,
			  gap: 10
		  }
	  },
	theme: 'material',
	behaviour: {
	  autoHide: 5000,
	  onClick: 'hide',
	  onMouseover: 'pauseAutoHide',
	  showDismissButton: true,
	  stacking: 4
	},
	animations: {
	  enabled: true,
	  show: {
		preset: 'slide',
		speed: 300,
		easing: 'ease'
	  },
	  hide: {
		preset: 'fade',
		speed: 300,
		easing: 'ease',
		offset: 50
	  },
	  shift: {
		speed: 300,
		easing: 'ease'
	  },
	  overlap: 150
	}
};

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
		NotifierModule.withConfig(customNotifierOptions),
		NgProgressModule.forRoot({
			thick: true,
			color: '#52BA11',
			spinner: false
		}),
		NgProgressRouterModule.forRoot(),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		ApiServiceService,
		VerifyService,
		AuthGuard,
		NotificationsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
