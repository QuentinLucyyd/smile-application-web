
export class User {
	id: Number = 0;
	username: String = '';
	firstName: String = '';
	lastName: String = '';
	email: String = '';

	constructor(user) {
		this.updateUser(user);
	}

	updateUser(user) {
		if ( user.id ) { this.id = user.id; }
		if ( user.username ) { this.username = user.username; }
		if ( user.firstName ) { this.firstName = user.firstName; }
		if ( user.lastName ) { this.lastName = user.lastName; }
		if ( user.email ) { this.email = user.email; }
	}
}