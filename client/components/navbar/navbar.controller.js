'use strict';

class NavbarController {

  oculta(){

  $('.navbar-collapse').collapse('hide');
  }

}

angular.module('bootstrapApp')
  .controller('NavbarController', NavbarController);
