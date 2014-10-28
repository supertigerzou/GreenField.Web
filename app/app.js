

var app = angular.module('GreenFieldApp', [
    'ngRoute', 'LocalStorageModule'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    }).when("/books", {
        controller: "booksController",
        templateUrl: "/app/views/books.html"
    }).when("/authors", {
        controller: "authorsController",
        templateUrl: "/app/views/authors.html"
    }).when('/authors/:authorId', {
        controller: 'authorDetailsController',
        templateUrl: '/app/views/author-detail.html'
    }).otherwise({
        redirectTo: "/login"
    });
}]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
