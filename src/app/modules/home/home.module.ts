import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Pages Import */
import { PageHomeComponent } from '../../components/pages/page-home/page-home.component'

/*Elements Import */
import { ModalSignInComponent } from '../../components/elements/modals/modal-sign-in/modal-sign-in.component'

const appRoutes = [
	{path: '', component: PageHomeComponent}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes)
	],
	declarations: [
		PageHomeComponent,
		ModalSignInComponent
	]
})

export class HomeModule { }
