angular.module('tumble').service('mainService', function($http){

	this.getList = function(){
		return $http({
			method: 'GET',
			url: '/current' 
		}).then(function(res) {

			return res.data;
		})
	}
	
	this.subscribe = function(info) {
		return $http({
			method: 'POST',
			url: '/add',
			data: info
		})
	}
    
});