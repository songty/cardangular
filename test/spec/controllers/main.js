'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cardangularApp'));

  var MainCtrl,
    mocks = {},
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mocks.utilsService = {
      shuffleArray: jasmine.createSpy('shuffleArray()')
    };

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      utilsService: mocks.utilsService
      // place here mocked dependencies
    });
  }));

  it('should initialize with 52 cards', function () {
    expect(MainCtrl.pairings.length).toBe(52);
  });

  it('should initialize with 4 suits with 13 cards', function() {
    function isSuit(suit) {
      return function(pair) {
        return pair.suit === suit;
      };
    }

    expect(MainCtrl.pairings.filter(isSuit('club')).length).toBe(13);
    expect(MainCtrl.pairings.filter(isSuit('diamond')).length).toBe(13);
    expect(MainCtrl.pairings.filter(isSuit('heart')).length).toBe(13);
    expect(MainCtrl.pairings.filter(isSuit('spade')).length).toBe(13);
  });

  it('should initialize with card values 2 to ace sets of four', function() {
    var cards = ['two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine', 'ten', 'jack',
      'queen', 'king', 'ace'];

    function getCard(pair) {
      return pair.card;
    }

    expect(MainCtrl.pairings.slice(0, 13).map(getCard)).toEqual(cards);
    expect(MainCtrl.pairings.slice(13, 26).map(getCard)).toEqual(cards);
    expect(MainCtrl.pairings.slice(26, 39).map(getCard)).toEqual(cards);
    expect(MainCtrl.pairings.slice(39, 52).map(getCard)).toEqual(cards);
  });

  it('should shuffle the deck of cards by calling shuffleArray', function() {
    var initialPairings = MainCtrl.pairings;
    MainCtrl.shuffle();

    expect(mocks.utilsService.shuffleArray).toHaveBeenCalled();
    expect(mocks.utilsService.shuffleArray).toHaveBeenCalledWith(initialPairings);
  });

  it('should replace the deck with shuffled deck', function() {
    mocks.utilsService.shuffleArray.and.returnValue('fake shuffle');
    MainCtrl.shuffle();

    expect(MainCtrl.pairings).toEqual('fake shuffle');
  });

  it('should reset the deck back to initialized after shuffle', function() {
    var initialPairings = MainCtrl.pairings;
    mocks.utilsService.shuffleArray.and.returnValue('fake shuffle');

    MainCtrl.shuffle();
    expect(MainCtrl.pairings).toEqual('fake shuffle');

    MainCtrl.reset();
    expect(MainCtrl.pairings).toEqual(initialPairings);
  });
});
