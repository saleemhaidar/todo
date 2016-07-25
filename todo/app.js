var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []
function home() {
  var vm = this;
  vm.message = 'The home message.';
};
