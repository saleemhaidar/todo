var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = ['$interval']
function home($timeout){
  var vm = this;
  vm.count = 0;
  $timeout(function() {vm.count++}, 1000);
};
