'use strict';

// src/services/game/hooks/startGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    console.log("hi")
    return hook.app.service('games').get(hook.id)
      .then((game) => {
        console.log("hoi....")

        if (hook.data.startGame === undefined)
        {
          // throw new errors.Forbidden('You must be the author to change the dice number');
          return
        }


        const diceThrow = Math.floor(Math.random() * 6) + 1;

        console.log("throw is " + diceThrow)

        hook.data.thrownDices = diceThrow;

        console.log(hook.data)

        // const action = hook.data.startGame ? '$addToSet' : '$pull';
        // let data = {};
        // data[action] = { thrownDices: diceThrow };
        // hook.data = data;
      })
  }
}
