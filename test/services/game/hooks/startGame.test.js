'use strict';

const assert = require('assert');
const startGame = require('../../../../src/services/game/hooks/startGame.js');

describe('game startGame hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    startGame()(mockHook);

    assert.ok(mockHook.startGame);
  });
});
