import React, { useState } from 'react';

import { DoNotDisturbState } from './NotificationState/DoNotDisturb'
import { HomeState } from './NotificationState/Home'
import { WorkState } from './NotificationState/Work';
import { FriendState } from './NotificationState/Friends'

import './App.css';

function vibrate() {
	let widget = document.getElementById("phone");
	widget.classList.add('vibrate')
	setTimeout(function(){
		widget.classList.remove("vibrate");
	}, 1500);
}
function blink() {
	let widget = document.getElementById("phone");
	widget.classList.add('blink')
	setTimeout(function(){
		widget.classList.remove("blink");
	}, 1500);
}
function both() {
	let widget = document.getElementById("phone");
	widget.classList.add('both')
	setTimeout(function(){
		widget.classList.remove("both");
	}, 1500);
}
function ignore() {}
const actionMap = {'vibrate': vibrate, 'blink': blink, 'both': both, 'ignore': ignore};

function App() {
	const [ notificationState, setNotificationState ] = useState(new HomeState());

	function notify(notification) {
		let action = notificationState[notification]();
		console.log(actionMap);
		console.log(action);
		console.log(actionMap[action]);
		actionMap[action]();
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="States">
					<h2>My State:</h2>
					<h4>{ notificationState.NAME }</h4>
					<button onClick={ () => { setNotificationState(new DoNotDisturbState()) }}>
						{ 'Do Not Disturb' }
					</button>
					<button onClick={ () => { setNotificationState(new HomeState()) }}>
						{ 'Home' }
					</button>
					<button onClick={ () => { setNotificationState(new WorkState()) }}>
						{ 'Work' }
					</button>
					<button onClick={ () => { setNotificationState(new FriendState()) }}>
						{ 'Friends' }
					</button>
				</div>
				<div id="phone"> </div>
				<div className={"Actions"}>
					<h2>App Notifications: </h2>
					<h4>&nbsp;</h4>
					<button onClick={ () => { notify('text') }}>
						{ 'Text' }
					</button>
					<button onClick={ () => { notify('importantText') }}>
						{ 'Important Text' }
					</button>
					<button onClick={ () => { notify('slack') }}>
						{ 'Slack Message' }
					</button>
					<button onClick={ () => { notify('candyCrush') }}>
						{ 'Candy Crush' }
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
