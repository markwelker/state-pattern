export class NotificationState {

    constructor() {
        this.NAME = 'state';
        this.BLINK = 'blink';
        this.VIBRATE = 'vibrate';
        this.BOTH = 'both';
        this.IGNORE = 'ignore';
    }

    text() {
        return this.VIBRATE;
    }

    slack() {
        return this.IGNORE;
    }

    importantText() {
        return this.BOTH;
    }

    candyCrush() {
        return this.BLINK;
    }
}