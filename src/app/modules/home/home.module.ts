import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

/* Pages Import */
import { PageDashboardComponent } from '../../components/pages/page-dashboard/page-dashboard.component';
import { SubPageDashboardComponent } from '../../components/pages/sub-pages/sub-page-dashboard/sub-page-dashboard.component';
import { SubPageCheckinComponent } from '../../components/pages/sub-pages/sub-page-checkin//sub-page-checkin.component';
import { SubPageCheckoutComponent } from '../../components/pages/sub-pages/sub-page-checkout/sub-page-checkout.component';
import { SubPageGoalsComponent } from '../../components/pages/sub-pages/sub-page-goals/sub-page-goals.component';

/* Elememnts Import */
import { ElementNavDashboardComponent } from '../../components/elements/element-nav-dashboard/element-nav-dashboard.component';
import { ElementSidebarComponent } from '../../components/elements/element-sidebar/element-sidebar.component';
import { ElementProfileHeaderComponent } from '../../components/elements/element-profile-header/element-profile-header.component';
import { ModalAddGoalComponent } from '../../components/elements/modals/modal-add-goal/modal-add-goal.component';


/* Import Services */
import { NotificationsService } from '../../services/notifications.service';

const appRoutes = [
	{ path:'', component: PageDashboardComponent, children:
	[
		{ path:'', component: SubPageDashboardComponent },
		{ path:'checkin', component: SubPageCheckinComponent },
		{ path:'checkout', component: SubPageCheckoutComponent },
		{ path: 'goals', component: SubPageGoalsComponent }
	]}
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
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes),
		NotifierModule.withConfig(customNotifierOptions),
		Ng5SliderModule
	],
	declarations: [
		PageDashboardComponent,
		ElementNavDashboardComponent,
		SubPageDashboardComponent,
		ElementSidebarComponent,
		ElementProfileHeaderComponent,
		SubPageCheckinComponent,
		SubPageCheckoutComponent,
		SubPageGoalsComponent,
		ModalAddGoalComponent,
	], providers: [
		NotificationsService
	]
})

export class HomeModule { }
