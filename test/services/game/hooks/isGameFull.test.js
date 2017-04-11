'use strict';

const assert = require('assert');
const isGameFull = require('../../../../src/services/game/hooks/isGameFull.js');

describe('game isGameFull hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    isGameFull()(mockHook);

    assert.ok(mockHook.isGameFull);
  });
});
