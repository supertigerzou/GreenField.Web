
app.controller('authorsController', ['$scope', 'authorsService', function ($scope, authorsService) {
    $scope.authors = [];
    $scope.imageBase = "http://localhost:59584/";

    authorsService.getAuthors().then(function (results) {
        $scope.authors = results.data;
    }, function (error) {
        console.log(error.data.message);
    });
}]);