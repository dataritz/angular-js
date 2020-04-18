(function(){
  'use strict';
  angular.module('lunchChecker',[])

  .controller('lunchCheckerController',lunchCheckerController);
  lunchCheckerController.$inject=['$scope'];
  function lunchCheckerController($scope){
    $scope.Itemlist="";
    $scope.msg=""
    $scope.displayMsg=function(){
      var n=countItem($scope.Itemlist);
      if (n<=3 && n>0) {
        $scope.msg="Enjoy!";
      }
      else if (n>3) {
        $scope.msg="Too much!";

      }
      else {
        $scope.msg="Please enter data first";
      }

    };

    function countItem(string){
      if (string==""){
        return 0;
      }
      else {
        return string.split(',').length;
      }
    }
  }
})();
