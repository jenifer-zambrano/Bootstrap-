'use strict';

angular.module('bootstrapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('footer', {
        url: '/footer',
        template: '<footerApp></footerApp>'
      });
  });
