var app = angular.module("myApp", ["ngRoute","infinite-scroll", "ngMaterial"]);

app.config(function($routeProvider, $mdThemingProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl : "partials/home.htm",
    //     controller : "HomeController"
    // })
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : "HomeController"
    })
    .when("/search-results", {
        templateUrl : "partials/search-results.htm",
        controller : "SearchResultsController"
    });

    // $mdThemingProvider.theme('default')
    // .primaryPalette('pink')
    // .accentPalette('orange');

});

app.run(function($rootScope) {
  $rootScope.showLoader = false;
  
});
