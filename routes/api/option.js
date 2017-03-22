const router = require('express').Router();
// const models = require('../models');
const Hotel = require('../../models').Hotel;
const Restaurant = require('../../models').Restaurant;
const Activity = require('../../models').Activity;

router.get('/hotels', function(req, res, next){
  Hotel.findAll({})
  .then(function(foundHotel){
    res.json(foundHotel);
  })
  .catch(next);
})

router.get('/restaurants', function(req, res, next){
  Restaurant.findAll({})
  .then(function(foundRestaurant){
    res.json(foundRestaurant);
  })
  .catch(next);
})

router.get('/activities', function(req, res, next){
  Activity.findAll({})
  .then(function(foundActivity){
    res.json(foundActivity);
  })
  .catch(next);
})



module.exports = router;
