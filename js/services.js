app.service('WebService', function($http, $q, AppConstants){
    var CONTENT_FOLDER = AppConstants.API_LOCATION;
    this.getContentList = function(page) {
        var deferred = $q.defer();
        $http.get(CONTENT_FOLDER + page + ".json").then(function(result){
          deferred.resolve(result);
        }, function(error){
          deferred.reject(error);
        });
        return deferred.promise;
    };

    this.getData = function(url) {
        var deferred = $q.defer();
        $http.get(url).then(function(result){
          deferred.resolve(result);
        }, function(error){
          deferred.reject(error);
        });
        return deferred.promise;
    };

});

app.service('SearchResults', function($http, $q, AppConstants){
  this.getResults = function(page) {
  };
});

app.service('SearchResultsPages', function($http, $q, AppConstants){
  this.openPage = function(page) {

  };
});
