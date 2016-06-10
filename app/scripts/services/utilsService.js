'use strict';

/**
 * @ngdoc service
 * @name cardangularApp.utilsService
 * @description utility functions
 * # utilsService
 * Service in the cardangularApp.
 */
angular.module('cardangularApp')
  .service('utilsService', function () {
    var utilsService = {};
    
    // Knuth Shuffle
    utilsService.shuffleArray = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    return utilsService;
  });
