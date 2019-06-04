'use strict';

module.exports = function(app) {
    var planets = require('../controllers/planetsController');

    app.route('/planets')
        .get(planets.get_planets)
        .post(planets.create_planet)

    app.route('planets/:id')
        .get(planets.get_planet)
        .put(planets.update_planet)
        .delete(planets.delete_planet);
};