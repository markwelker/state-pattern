import { NotificationState } from "../index";

export class WorkState extends NotificationState {
	constructor() {
		super();
		this.NAME = 'At Work';
	}
	slack() {
		return this.BOTH;
	}
	candyCrush() {
		return this.IGNORE;
	}
}