'use strict';

// src/services/game/hooks/createGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const currentUser = hook.params.user;

    hook.data.title = `${currentUser.name}'s Game`;

    hook.data.playerIds = [hook.params.user._id];
  };
};
