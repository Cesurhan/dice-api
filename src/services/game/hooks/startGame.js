'use strict';

// src/services/game/hooks/startGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id) //hook.id is gameId coming from throwDice.js action
      .then((game) => { // Game contains all the record for game data game.isWinner is the record...
        if (hook.data.startGame === undefined)
        {
          // throw new errors.Forbidden('You must be the author to change the dice number');
          return
        }

        const diceThrow = Math.floor(Math.random() * 6) + 1;
        hook.data.thrownDice = diceThrow;

        const winningNumber = game.winningNumber;
        const dice = hook.data.thrownDice;
        const currentUser = hook.params.user.name;

        // Check if there is a winner
        if ( dice === winningNumber )
        {
          hook.data.isWinner = true;
          hook.data.winnerName = currentUser;
          console.log('The winner is: ' + currentUser)
        }

      })
  }
}
