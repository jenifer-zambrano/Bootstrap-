'use strict';

(function() {

  class MainController {

    constructor() {

    }


  }

  angular.module('bootstrapApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
