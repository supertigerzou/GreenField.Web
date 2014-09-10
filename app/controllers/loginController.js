
app.controller('loginController', ['$scope', '#location', 'authService', function ($scope, $location, authService) {
    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.login = function () {
        authService.login($scope.loginData).then(function () {
            $location.path('/books');
        });
    };
}]);