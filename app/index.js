var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '1f4b67b7337a4243a487c7a7bd4c0449'
var sentryApp = '113033'
var sentryUrl = 'https://' + sentryKey + '@sentry.io/' + sentryApp

var _APP_INFO ={
	name: 'Github Batlle',
	branch: 'video4',
	version: '1.0'
}

window.onerror = function(){
	Raven.showReportDialog();
}

Raven.config(sentryUrl, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch
	}

}).install()


ReactDOM.render(routes , document.getElementById('app'));