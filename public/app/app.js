'use strict';

var app = angular.module('app', ['ui.router']);

app.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {
    
	$logProvider.debugEnabled(true);
	$stateProvider
	.state('home', {
		url: '/',
		template: '<h1>This is a state</h1>'		
	});	
}]);