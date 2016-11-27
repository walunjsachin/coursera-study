(function(){
  'use strict'
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.ItemsInLunch='';
  $scope.CheckIfTooMuch = function ()
  {
      if($scope.ItemsInLunch=='')
      {
        $scope.state = 'red';  // bonus property to set color
        $scope.message = 'Please enter data first';
        return;
      }

      var strings = $scope.ItemsInLunch.split(',');
      var correctcount=0;  // this is handle no item between some commas inputs
      for(var i=0;i<strings.length;i++)
      {
        if(strings[i].trim()!='') // trim to check if empty value between commas
        {
            correctcount++;
        }

      }

      if(correctcount==0)
      {
        $scope.state = 'red';  // bonus property to set color
        $scope.message = 'Please enter data first';
      }
      else if(correctcount<=3)
        {
          $scope.state = 'green';  // bonus property to set color 
          $scope.message = 'Enjoy!';
        }
      else  {
          $scope.state = 'green';
          $scope.message = 'Too much!';
        }

  }
}
})();
