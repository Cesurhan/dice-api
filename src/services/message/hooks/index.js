'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    auth.associateCurrentUser({ as: 'authorId' }),
    auth.associateCurrentUser({ idField: 'name', as: 'author' }),
  ],
  update: [
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  patch: [
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ],
  remove: [
    auth.restrictToOwner({ ownerField: 'authorId' }),
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
