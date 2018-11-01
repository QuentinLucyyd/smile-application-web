import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Pages Import */
import { PageDashboardComponent } from '../../components/pages/page-dashboard/page-dashboard.component';
import { SubPageDashboardComponent } from '../../components/pages/sub-pages/sub-page-dashboard/sub-page-dashboard.component';
import { GoalsComponent } from '../../components/pages/goals/goals.component';

/* Elememnts Import */
import { ElementNavDashboardComponent } from '../../components/elements/element-nav-dashboard/element-nav-dashboard.component';

/* Import Services */

const appRoutes = [
	{ path:'', component: PageDashboardComponent, children: [
		{ path:'', component: SubPageDashboardComponent },
		{ path: 'goals', component: GoalsComponent }
	]}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes)
	],
	declarations: [
		PageDashboardComponent,
		ElementNavDashboardComponent,
		SubPageDashboardComponent,
		GoalsComponent
	]
})

export class HomeModule { }
