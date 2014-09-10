

var app = angular.module('greenFieldApp', [
    'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/login", {
        controller: "",
        templateUrl: ""
    }).otherwise({
        redirectTo: "/home"
    });
}]);