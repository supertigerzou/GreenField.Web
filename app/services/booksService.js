
app.factory('booksService', ['$http', function ($http) {
    var serviceBase = "http://localhost:59584/";
    var booksServiceFactory = {};

    var _getBooks = function () {
        return $http.get(serviceBase + 'api/books').then(function (results) {
            return results;
        });
    };
    
    booksServiceFactory.getBooks = _getBooks;

    return booksServiceFactory;
}]);