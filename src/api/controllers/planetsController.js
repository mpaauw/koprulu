'use strict';

var mongoose = require('mongoose'),
    Planet = mongoose.model('planets');

exports.get_planets = function(input, result) {
    Planet.find({}, function(error, planet) {
        if(error) {
            result.send(error);
        };
        result.json(planet);
    });
};

exports.get_planet = function(input, result) {
    Planet.findById(input.params.id, function(error, planet) {
        if(error) {
            result.send(error);
        }
        result.json(planet);
    });
};

exports.create_planet = function(input, result) {
    var new_planet = new Planet(input.body);
    new_planet.save(function(error, planet) {
        if(error) {
            result.send(error);
        };
        result.json(planet);
    });
};

exports.update_planet = function(input, result) {
    Planet.findOneAndUpdate({_id: input.params.id}, input.body, {new: true}, function(error, planet) {
        if(error) {
            result.send(error);
        };
        result.json(planet);
    });
};

exports.delete_planet = function(input, result) {
    Planet.remove({_id: input.params.id}, function(error, planet) {
        if(error) {
            result.send(error);
        };
        result.json({message: 'Planet deleted successfully.'});
    });
};

