
app.controller('loginController', ['$scope', '$location', 'authService', 'ngAppSettings', function ($scope, $location, authService, ngAppSettings) {
    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.login = function () {
        authService.login($scope.loginData).then(function () {
            $location.path('/authors');
        });
    };
    
    $scope.authExternalProvider = function (provider) {

        var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';

        var externalProviderUrl = ngAppSettings.apiServiceBaseUri + "api/Account/ExternalLogin?provider=" + provider
                                                                    + "&response_type=token&client_id=" + ngAppSettings.clientId
                                                                    + "&redirect_uri=" + redirectUri;
        window.$windowScope = $scope;

        var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
    };

    $scope.authCompletedCB = function(fragment) {

        $scope.$apply(function() {

            if (fragment.haslocalaccount == 'False') {

                authService.logOut();

                authService.externalAuthData = {
                    provider: fragment.provider,
                    userName: fragment.external_user_name,
                    externalAccessToken: fragment.external_access_token
                };

                $location.path('/associate');

            } else {
                //Obtain access token and redirect to orders
                var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
                authService.obtainAccessToken(externalData).then(function(response) {

                    $location.path('/authors');

                },
                    function(err) {
                        $scope.message = err.error_description;
                    });
            }

        });
    };
}]);