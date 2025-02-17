import { BehaviorSubject } from "rxjs";

export class User {
	visible$: BehaviorSubject<Boolean> = new BehaviorSubject(true);
	id: Number = 0;
	identifier: String = '';
	username: String = '';
	first_name: String = '';
	last_name: String = '';
	joining_date: Date;
	role: String = '';
	email: String = '';
	password: String = '';
	profile_image: String = '';
	profileImage: FormData;
	birthdate: Date;
	city: String = '';
	company: String;

	constructor(user) {
		this.updateUser(user);
	}

	updateUser(user) {
		if ( user.id ) { this.id = user.id; }
		if ( user.identifier ) { this.identifier = user.identifier; }
		if ( user.username ) { this.username = user.username; }
		if ( user.first_name ) { this.first_name = user.first_name; }
		if ( user.last_name ) { this.last_name = user.last_name; }
		if ( user.role ) { this.role = user.role; }
		if ( user.email ) { this.email = user.email; }
		if ( user.password ) { this.password = user.password; }
		if ( user.password ) { this.password = user.password; }
		if ( user.profile_image ) { this.profile_image = user.profile_image; }
		if ( user.birthdate ) { this.birthdate = new Date(user.birthdate); }
		if ( user.joining_date ) { this.joining_date = new Date(user.joining_date); }
		if ( user.city ) { this.city = user.city; }
		if ( user.company ) { this.company = user.company; }
	}
}
