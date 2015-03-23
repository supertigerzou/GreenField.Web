
app.factory('authorsService', ['$http', function ($http) {
    var serviceBase = "http://localhost:59584/";
    var authorsServiceFactory = {};

    var _getAuthors = function () {
        return $http.get(serviceBase + 'api/authors').then(function (results) {
            return results;
        });
    };

    var _getAuthorById = function (id) {
        return $http.get(serviceBase + 'api/authors/' + id).then(function (results) {
            return results;
        });
    };
    
    authorsServiceFactory.getAuthors = _getAuthors;
    authorsServiceFactory.getAuthorById = _getAuthorById;

    return authorsServiceFactory;
}]);