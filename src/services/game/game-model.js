'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  winningNumber: { type: Number },
  thrownDices: { type: Number, 'default': 0 },
  playerIds: [Schema.Types.ObjectId],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
