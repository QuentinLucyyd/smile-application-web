export class Voice {
	id: Number = 0;
	name: String = '';

	constructor(user) {
		this.updateUser(user);
	}

	updateUser(user) {
		if ( user.id ) { this.id = user.id; }
		if ( user.name ) { this.name = user.name; }
	}
}
