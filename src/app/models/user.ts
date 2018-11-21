export class User {
	id: Number = 0;
	identifier: String = '';
	username: String = '';
	first_name: String = '';
	last_name: String = '';
	role: String = '';
	email: String = '';
	password: String = '';

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
	}
}
