app.controller('thumbController', function($scope, $http)){
	
	$http.post("/api/thumbnails").then(function(response){
		$scope.link = response.data.thumbnails;
	})
});