app.controller('thumbController', function($scope, $http){
	$http.post("/api/thumbnails").then(function(response){
		$scope.links = response.data.thumbnails;
	})
});