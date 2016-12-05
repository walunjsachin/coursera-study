(function (){
  'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject= ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var tobuy = this;

tobuy.items = ShoppingListCheckOffService.getBuyItems();

tobuy.itembought = function (index)
{
  ShoppingListCheckOffService.bought(index);
};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService()
{
  var service = this;

  var tobuylist = [
    {
        name: "Cookies",
        quantity: "3 bags"
    },
    {
      name: "Sugary Drinks",
      quantity: "20 bottles"
    },
    {
      name: "Chips",
      quantity: "2 bags"
    },
    {
      name: "Water",
      quantity: "20 bottles"
    }
    {
      name: "Apples",
      quantity: "20 apples"
    }
  ];

    var boughtlist = [];

    service.bought = function (itemIndex)
    {
    boughtlist.push(tobuylist[itemIndex]);
    tobuylist.splice(itemIndex,1);
      console.log( itemIndex);
    };

    service.getBuyItems =  function ()
    {
      return tobuylist;
    };

    service.getBoughtItems = function()
    {
      return boughtlist;
    };

}

})();
