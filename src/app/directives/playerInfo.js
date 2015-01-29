'use strict';

angular.module('darts').directive('playerInfo', [

  function playerInfo() {
    return {
      restrict: 'A',
      template: '<div class="player-standings">' +
                  '<span class="name">{{getName()}}</span>' +
                  '<span class="score">{{player.getScore()}}</span>' +
                  '<input score-input="player" type="text" name="move">' +
                  '<div class="moves">' +
                  '<div move-info="move" ng-repeat="move in player.getMoves() track by $index"></div>' +
                  '</div>' +
                  '</div>',
      scope: {
        player: '=playerInfo'
      },
      link: function(scope, element, attrs) {
        scope.getName = function() {
          var name = scope.player.name();
          return name != null && name !== '' ? scope.player.name() : "???";
        };
      }
    };
  }
]);
