app.controller('HomeController', function($scope, $http, $timeout,  $location, $rootScope, $interval, WebService, $mdDialog) {

  $scope.tileArray = [];
  $scope.nextPageIndex = null;
  $scope.pageDetails = null;
  $scope.isLoading = false;
  var totalItems = 0, itemsLoaded = 0;

  $scope.init = function(){
    $scope.nextPageIndex = 1;
    $scope.fromPlace = "";
    $scope.toPlace = "";
    var currDate = new Date();
    $scope.fromDate = currDate;
    // var tomDate = new Date();
    // $scope.loadNextPage();
  };

  $scope.fromDateChange = function(date) {
    console.log('date', date);
  };

  $scope.showPrerenderedDialog = function() {
    $mdDialog.show({
      contentElement: '#myStaticDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.cancelDialog = function() {
    $mdDialog.cancel();
  };

  $scope.searchFlights = function() {

    var now = $scope.fromDate;
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);

    var isInvalid = !(day && $scope.fromDate && $scope.selectedFromLocation && $scope.travellerCount && $scope.travellerClass);
    if(isInvalid){
      return;
    }
    $rootScope.showLoader = true;
    $timeout(function() {
        if(day<65) {
        // if ($scope.travellerClass == "Economy Class") {
          //Business Traveller
          $rootScope.searchResults = [
            'a', 'b', 'c'
          ];
          window.open("Flyto/business_traveller_usecase.html","_self");
        } else if(day>=65) {
          if ($scope.childCount>0 || $scope.infantCount>0) {
            //family leisure
            window.open("Flyto/family_travellers_usecase.html","_self");
          } else {
            //backpacker
            window.open("Flyto/backpackers_traveller_usecase.html","_self");
          }
        }
      }, 1000);
  };
  $scope.fromSelectedItemChange = function() {
    console.log('selectedFromLocation', $scope.selectedFromLocation);
  };
  $scope.toSelectedItemChange = function() {
    console.log('selectedFromLocation', $scope.selectedToLocation);
  };
  $scope.adultCount = 0;
  $scope.childCount = 0;
  $scope.infantCount = 0;
  $scope.travellerCount = 0;
  var calcTravellerCount = function(){
    $scope.travellerCount = $scope.adultCount+$scope.childCount+$scope.infantCount;
  };

  $scope.add = function(item) {
    switch (item) {
      case 'adult':
          $scope.adultCount+=1;

        break;
      case 'child':
          $scope.childCount+=1;

        break;
      case 'infant':
          $scope.infantCount+=1;

        break;
      default:

    }
    calcTravellerCount();
  };
  $scope.minus = function(item) {
    switch (item) {
      case 'adult':
          if($scope.adultCount>0){
            $scope.adultCount-=1;
          }
        break;
      case 'child':
          if($scope.childCount>0){
            $scope.childCount-=1;
          }
        break;
      case 'infant':
          if($scope.infantCount>0){
            $scope.infantCount-=1;
          }
        break;
      default:

    }
    calcTravellerCount();
  };

  $scope.travellerClassList = [
    "Economy Class",
    "Premium Economy Class",
    "Business Class"
  ];

  $scope.locationList = [
    {
      code: "ARN",
      label: "ARN - Stockholm"
    },
    {
      code: "ATH",
      label: "ATH - Athens"
    },
    {
      code: "CDG",
      label: "CDG - Paris"
    },
    {
      code: "DXB",
      label: "DXB - Dubai"
    },
    {
      code: "FRA",
      label: "FRA - Frankfurt"
    },
    {
      code: "LHR",
      label: "LHR - London"
    },
    {
      code: "MUC",
      label: "MUC - Munich"
    },
    {
      code: "PRG",
      label: "PRG - Prague"
    },
    {
      code: "TXL",
      label: "TXL - Berlin"
    }
  ];

  $scope.init();

});
