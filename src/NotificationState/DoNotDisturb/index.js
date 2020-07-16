import { NotificationState } from "../index";

export class DoNotDisturbState extends NotificationState {
    constructor() {
        super();
        this.NAME = 'Do Not Disturb';
    }
    text() {
        return this.IGNORE;
    }
    importantText() {
        return this.VIBRATE;
    }
    slack() {
        return this.IGNORE;
    }
    candyCrush() {
        return this.IGNORE;
    }
}