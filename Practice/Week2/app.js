(function(){
    'use strict'

    var myList = ["one","two","three","four","five","six"];
    var myList2 = [
      {fname:"Sachin", lname:"Walunj"},
      {fname:"Sanika", lname:"Walunj"},
      {fname:"Ashwini", lname:"Walunj"},
    ];
  /*  var myList2 = [
      {
      name: "Cookie"
      quantity: "50"
      },
      {
        name: "Book"
        quantity: "150"
      },
      {
        name: "Course"
        quantity: "200"
      },
      {
        name: "Flower"
        quantity: "10"
      }
    ];
*/
    angular.module("MyApp",[])
    .controller("MyController",MyController);
    MyController.$inject = ['$scope'];
    function MyController($scope)
    {
      console.log($scope);
      $scope.name="Sachin";
      $scope.myList = myList;
      $scope.myList2 = myList2;
      //$scope.Counter=0;
      $scope.CheckWatcher = function()
      {
        console.log($scope.$$watchersCount);
      };
      $scope.IncrementCounter = function ()
      {
        $scope.Counter++;
      };

      $scope.AddMember = function () {
        var newitem = {
          fname : $scope.newFname,
          lname : $scope.newLname
        };
        $scope.myList2.push(newitem);

      }


    }

  })();
