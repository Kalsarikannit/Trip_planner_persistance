const router = require('express').Router();
const Restaurant = require('../../models').Restaurant;

router.get('/', function(req, res, next){
  Restaurant.findAll({})
  .then(function(foundRestaurants){
    res.json(foundRestaurants);
  })
  .catch(next);
});


module.exports = router;