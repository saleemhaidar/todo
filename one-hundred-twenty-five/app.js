var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []

function home(){
  var vm = this;
  vm.todos = [
    {name: 'Clean garage.', checked: true},
    {name: 'Wash dishes.', checked: false}
  ]
  vm.message = "Todo list:";
};
