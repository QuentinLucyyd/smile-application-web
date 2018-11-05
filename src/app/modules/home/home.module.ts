import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';

/* Pages Import */
import { PageDashboardComponent } from '../../components/pages/page-dashboard/page-dashboard.component';
import { SubPageDashboardComponent } from '../../components/pages/sub-pages/sub-page-dashboard/sub-page-dashboard.component';
import { PageCheckinComponent } from '../../components/pages/sub-pages/sub-page-checkin/page-checkin.component';
import { PageCheckoutComponent } from '../../components/pages/sub-pages/sub-page-checkout/page-checkout.component';

/* Elememnts Import */
import { ElementNavDashboardComponent } from '../../components/elements/element-nav-dashboard/element-nav-dashboard.component';
import { ElementSidebarComponent } from '../../components/elements/element-sidebar/element-sidebar.component';
import { ElementProfileHeaderComponent } from '../../components/elements/element-profile-header/element-profile-header.component';

/* Import Services */

const appRoutes = [
	{ path:'', component: PageDashboardComponent, children:
	[
		{ path:'', component: SubPageDashboardComponent },
		{ path:'checkin', component: PageCheckinComponent },
		{ path:'checkout', component: PageCheckoutComponent },
	]}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes),
		Ng5SliderModule
	],
	declarations: [
		PageDashboardComponent,
		ElementNavDashboardComponent,
		SubPageDashboardComponent,
		ElementSidebarComponent,
		ElementProfileHeaderComponent,
		PageCheckinComponent,
		PageCheckoutComponent
	]
})

export class HomeModule { }
