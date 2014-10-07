
app.controller('booksController', ['$scope', 'booksService', function ($scope, booksService) {
    $scope.books = [];

    booksService.getBooks().then(function (results) {
        $scope.books = results.data;
    }, function (error) {
        console.log(error.data.message);
    });
}]);