
app.controller('authorDetailsController', ['$scope', '$sce', '$routeParams', 'authorsService', function ($scope, $sce, $routeParams, authorsService) {
    $scope.author = {};
    $scope.imageBase = "http://localhost:59584";

    authorsService.getAuthorById($routeParams.authorId).then(function (results) {
        $scope.author = results.data;
        $scope.authorDesc = $sce.trustAsHtml($scope.author.description);
        $scope.authorImg = $scope.imageBase + $scope.author.pictureModels[0].fullSizeImageUrl;
    }, function (error) {
        console.log(error.data.message);
    });
}]);