﻿
app.factory('authService', ['$http', '$q', function ($http, $q) {
    var serviceBase = "http://localhost:59584/";
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _login = function (loginData) {
        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();

        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .success(function (response) {
                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;

                deferred.resolve(response);
            });
    };

    var _logOut = function () {
        _authentication.isAuth = false;
        _authentication.userName = "";
    };

    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
}]);