import { Component, OnInit, Input } from '@angular/core';
import { SubPage } from '../../../classes/abstract/page.class';
import { CheckinsService } from '../../../services/checkins.service';
import { UsersService } from '../../../services/users.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Checkin } from '../../../models/checkin';
import { Chart } from 'angular-highcharts';

@Component({
	selector: 'app-element-checkins-overview',
	templateUrl: './element-checkins-overview.component.html',
	styleUrls: ['./element-checkins-overview.component.scss']
})
export class ElementCheckinsOverviewComponent extends SubPage implements OnInit {
	@Input() checkins: Array<Checkin>;
	Checkins: Array<Checkin> = [];
	noCheckins: Boolean = false;

	chart: Chart;

	constructor(
		private checkinsService: CheckinsService,
		private usersSerivce: UsersService,
		private authenticationSerivce: AuthenticationService
	) { super(); }

	ngOnInit() {
		this.loading = true;
		if (!this.checkins) {
			this.authenticationSerivce.AuthenticateUser()
			.then(data => {
					this.checkinsService.getUserCheckins(this.usersSerivce.ActiveUser.id)
					.subscribe(result => {
						this.loading = false;
						for (const checkin of result.data) {
							const _val = new Checkin(checkin);
							this.Checkins.push(_val);
						}
						if (this.Checkins.length > 1)
							this.populateChart();
						else
							this.noCheckins = true;
					}, err => {
						this.loading = false;
						this.failure = true;
					})
			})
		} else {
			this.loading = false;
			console.log(this.checkins);
			if (this.checkins.length > 1) {
				this.Checkins = this.checkins;
				this.populateChart();
			}
		}
	}

	populateChart() {
		let physical_energy = [];
		let heart_connection = [];
		let mental_focus = [];
		let greater_whole = [];
		let happiness = [];
		let dates = [];
		for (const checkin of this.Checkins) {
			physical_energy.push(checkin.physical_energy);
			heart_connection.push(checkin.heart_connection);
			mental_focus.push(checkin.mental_focus);
			greater_whole.push(checkin.greater_whole);
			happiness.push(checkin.happiness);
			dates.push(new Date(checkin.date).getFullYear() + '-' + (new Date(checkin.date).getMonth() + 1) + '-' + new Date(checkin.date).getUTCDate());
		}
		this.chart  = new Chart({
			chart: { type: 'line' },
			title: { text: ''},
			credits: { enabled: false },
			xAxis: {
				tickmarkPlacement: 'on',
				gridLineWidth: 0,
				maxPadding: 0,
				startOnTick: true,
				endOnTick: true,
				categories: dates
			},
			yAxis: {tickInterval: 10, max: 100}
		});
		this.chart.addSerie({name: 'Physical Energy', type: 'spline', data: physical_energy});
		this.chart.addSerie({name: 'Heart Connection', type: 'spline', data: heart_connection});
		this.chart.addSerie({name: 'Mental Focus',type: 'spline',  data: mental_focus});
		this.chart.addSerie({name: 'Greater Whole', type: 'spline', data: greater_whole});
		this.chart.addSerie({name: 'Happines', type: 'spline', data: happiness});
	}
}
