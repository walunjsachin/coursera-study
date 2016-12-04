(function (){
angular.module('MyApp',[])
.controller('MyController',MyController)
.filter('custom',CustomFilterFactory)
.filter('replace',replaceFilter);

MyController.$inject = ['$scope','$filter','customFilter']

function MyController($scope,$filter,customFilter)
{
  $scope.name = '100';

  var output = $filter('uppercase')($scope.name);
  $scope.name = output;

$scope.sendmsg = function(){
  var msg = "Test1";
  msg = customFilter(msg,"Okey");
  return msg;
}

}

function CustomFilterFactory(){
  return function (input, arg1){
    input = input || "";
    input = "Test2" +  arg1;
    return input;
  };
}

function replaceFilter()
{
  return function(input,target,replace){
    input = input.replace(target,replace);
    return input;
  }
}

})();
