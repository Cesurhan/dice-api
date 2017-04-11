'use strict';

const assert = require('assert');
const joinGame = require('../../../../src/services/game/hooks/joinGame.js');

describe('game joinGame hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    joinGame()(mockHook);

    assert.ok(mockHook.joinGame);
  });
});
