var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.use('/api/activities', require('./api/activities'));
router.use('/api/days', require('./api/days'));
router.use('/api/hotels', require('./api/hotels'));
router.use('/api/restaurants', require('./api/restaurants'));

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index');
  })
  .catch(next);
});

module.exports = router;
