

var greenFieldApp = angular.module('greenFieldApp', [
    'ngRoute'
]);

greenFieldApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/login", {
        controller: "",
        templateUrl: ""
    }).otherwise({
        redirectTo: "/home"
    });
}]);