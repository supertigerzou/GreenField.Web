

var app = angular.module('GreenFieldApp', [
    'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    }).when("/books", {
        controller: "booksController",
        templateUrl: "/app/views/books.html"
    }).otherwise({
        redirectTo: "/login"
    });
}]);