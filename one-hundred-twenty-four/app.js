var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []
function home(){
  var vm = this;
  vm.todos = [
    {name: "Clean garage."},
    {name: "Wash dishes."}
  ]
  vm.message = "To do list:"
}
