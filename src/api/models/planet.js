'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({
    name: String,
    sector: String,
    temperatureF: Number,
    gravity: Number
});

module.exports = mongoose.model('planets', planetSchema);
