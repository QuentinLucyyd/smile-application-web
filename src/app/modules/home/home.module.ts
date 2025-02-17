import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';

/* Pages Import */
import { PageDashboardComponent } from '../../components/pages/page-dashboard/page-dashboard.component';
import { SubPageDashboardComponent } from '../../components/pages/sub-pages/sub-page-dashboard/sub-page-dashboard.component';
import { SubPageCheckinComponent } from '../../components/pages/sub-pages/sub-page-checkin//sub-page-checkin.component';
import { SubPageCheckoutComponent } from '../../components/pages/sub-pages/sub-page-checkout/sub-page-checkout.component';
import { SubPageGoalsComponent } from '../../components/pages/sub-pages/sub-page-goals/sub-page-goals.component';
import { SubPageNotesComponent } from '../../components/pages/sub-pages/sub-page-notes/sub-page-notes.component';
import { SubPageInviteComponent } from '../../components/pages/sub-pages/sub-page-invite/sub-page-invite.component';
import { SubPageUsersComponent } from '../../components/pages/sub-pages/sub-page-users/sub-page-users.component';
import { SubPageUserComponent } from '../../components/pages/sub-pages/sub-page-user/sub-page-user.component';
import { SubPageInformationComponent } from '../../components/pages/sub-pages/sub-page-information/sub-page-information.component';

/* Elememnts Import */
import { ElementNavDashboardComponent } from '../../components/elements/element-nav-dashboard/element-nav-dashboard.component';
import { ElementSidebarComponent } from '../../components/elements/element-sidebar/element-sidebar.component';
import { ElementProfileHeaderComponent } from '../../components/elements/element-profile-header/element-profile-header.component';
import { ElementCheckinsOverviewComponent } from '../../components/elements/element-checkins-overview/element-checkins-overview.component';
import { ElementNotesOverviewComponent } from '../../components/elements/element-notes-overview/element-notes-overview.component';
import { ElementUpcomingGoalsComponent } from '../../components/elements/element-upcoming-goals/element-upcoming-goals.component';
import { ElementCompletedGoalsComponent } from '../../components/elements/element-completed-goals/element-completed-goals.component';
import { ElementAdminRecentCheckinsComponent } from '../../components/elements/element-admin-recent-checkins/element-admin-recent-checkins.component';
import { ElementAdminRecentUsersComponent } from '../../components/elements/element-admin-recent-users/element-admin-recent-users.component';
import { ElementAdminArchivedUsersComponent } from '../../components/elements/element-admin-archived-users/element-admin-archived-users.component';
import { ElementAdminCardsComponent } from '../../components/elements/element-admin-cards/element-admin-cards.component';

/* Import Guards */
import { AdminGuard } from '../../guards/admin.guard';

const appRoutes = [
	{ path:'', component: PageDashboardComponent, children:
	[
		{ path:'', component: SubPageDashboardComponent },
		{ path:'checkin', component: SubPageCheckinComponent },
		{ path:'checkout', component: SubPageCheckoutComponent },
		{ path: 'goals', component: SubPageGoalsComponent },
		{ path: 'notes', component: SubPageNotesComponent },
		{ path: 'notes/:id', component: SubPageNotesComponent },
		{ path: 'invite', component: SubPageInviteComponent, canActivate:[AdminGuard] },
		{ path: 'users', component: SubPageUsersComponent, canActivate:[AdminGuard] },
		{ path: 'user/:id', component: SubPageUserComponent, canActivate:[AdminGuard] },
		{ path: 'information', component: SubPageInformationComponent }
	]}
];

@NgModule({
	imports: [
		CommonModule,
		ChartModule,
		RouterModule.forChild(appRoutes),
		Ng5SliderModule,
		FormsModule
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
		SubPageUserComponent,
		ElementNotesOverviewComponent,
		ElementCheckinsOverviewComponent,
		ElementUpcomingGoalsComponent,
		ElementCompletedGoalsComponent,
		ElementAdminRecentCheckinsComponent,
		ElementAdminRecentUsersComponent,
		ElementAdminCardsComponent,
		ElementAdminArchivedUsersComponent,
		SubPageNotesComponent,
		SubPageInviteComponent,
		SubPageUsersComponent,
		SubPageInformationComponent
	], providers: [
		ElementCheckinsOverviewComponent,
		AdminGuard
	]
})

export class HomeModule { }
