'use strict';

const assert = require('assert');
const firstEncounter = require('../../../../src/services/game/hooks/firstEncounter.js');

describe('game firstEncounter hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    firstEncounter()(mockHook);

    assert.ok(mockHook.firstEncounter);
  });
});
