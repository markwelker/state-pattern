import { NotificationState } from "../index";

export class FriendState extends NotificationState {
	constructor() {
		super();
		this.NAME = 'With Friends';
	}
	candyCrush() {
		return this.IGNORE;
	}
}