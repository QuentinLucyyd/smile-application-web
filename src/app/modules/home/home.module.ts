import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { ChartModule } from 'angular-highcharts';

/* Pages Import */
import { PageDashboardComponent } from '../../components/pages/page-dashboard/page-dashboard.component';
import { SubPageDashboardComponent } from '../../components/pages/sub-pages/sub-page-dashboard/sub-page-dashboard.component';
import { SubPageCheckinComponent } from '../../components/pages/sub-pages/sub-page-checkin//sub-page-checkin.component';
import { SubPageCheckoutComponent } from '../../components/pages/sub-pages/sub-page-checkout/sub-page-checkout.component';
import { SubPageGoalsComponent } from '../../components/pages/sub-pages/sub-page-goals/sub-page-goals.component';
import { SubPageNotesComponent } from '../../components/pages/sub-pages/sub-page-notes/sub-page-notes.component';

/* Elememnts Import */
import { ElementNavDashboardComponent } from '../../components/elements/element-nav-dashboard/element-nav-dashboard.component';
import { ElementSidebarComponent } from '../../components/elements/element-sidebar/element-sidebar.component';
import { ElementProfileHeaderComponent } from '../../components/elements/element-profile-header/element-profile-header.component';
import { ModalAddGoalComponent } from '../../components/elements/modals/modal-add-goal/modal-add-goal.component';
import { ElementMobileMenuComponent } from '../../components/elements/element-mobile-menu/element-mobile-menu.component';
import { ElementCheckinsOverviewComponent } from '../../components/elements/element-checkins-overview/element-checkins-overview.component';
import { ElementNotesOverviewComponent } from '../../components/elements/element-notes-overview/element-notes-overview.component';
import { ModalDisplayNoteComponent } from '../../components/elements/modals/modal-display-note/modal-display-note.component';
import { ModalAddNoteComponent } from '../../components/elements/modals/modal-add-note/modal-add-note.component';

/* Import Services */

const appRoutes = [
	{ path:'', component: PageDashboardComponent, children:
	[
		{ path:'', component: SubPageDashboardComponent },
		{ path:'checkin', component: SubPageCheckinComponent },
		{ path:'checkout', component: SubPageCheckoutComponent },
		{ path: 'goals', component: SubPageGoalsComponent },
		{ path: 'notes', component: SubPageNotesComponent }
	]}
];

@NgModule({
	imports: [
		CommonModule,
		ChartModule,
		RouterModule.forChild(appRoutes),
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
		ElementMobileMenuComponent,
		ElementNotesOverviewComponent,
		ElementCheckinsOverviewComponent,
		SubPageNotesComponent,
		ModalDisplayNoteComponent,
		ModalAddNoteComponent
	], providers: [
	]
})

export class HomeModule { }
