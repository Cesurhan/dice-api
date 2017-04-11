'use strict';

const assert = require('assert');
const createGame = require('../../../../src/services/game/hooks/createGame.js');

describe('game createGame hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    createGame()(mockHook);

    assert.ok(mockHook.createGame);
  });
});
