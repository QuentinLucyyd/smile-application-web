import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const ROUTES = [
	{ path:'', loadChildren: './modules/home/home.module#HomeModule'}
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
