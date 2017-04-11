'use strict'

module.exports = function isGameFull(game) {
  return game.playerIds.length >= 2;
}
