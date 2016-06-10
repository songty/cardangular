'use strict';

/**
 * @ngdoc function
 * @name cardangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardangularApp
 */
angular.module('cardangularApp')
  .controller('MainCtrl', ['utilsService', function (utilsService) {
    var self = this;

    //Default ascending order - based on bridge ranking
    var suits= ['club', 'diamond', 'heart', 'spade'];
    var cards = ['two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine', 'ten', 'jack',
      'queen', 'king', 'ace'];

    function initPairings() {
      self.pairings = [];
      suits.forEach(function(suit) {
          cards.forEach(function(card) {
            self.pairings.push({
              suit: suit,
              card: card
            });
          });
      });
    }

    this.reset = function() {
      initPairings();
    };

    this.shuffle = function() {
      this.pairings = utilsService.shuffleArray(this.pairings);
    };

    initPairings();
  }]);
