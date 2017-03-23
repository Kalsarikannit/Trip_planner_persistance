const router = require('express').Router();
const Hotel = require('../../models').Hotel;

router.get('/', function(req, res, next){
  Hotel.findAll({})
  .then(function(foundHotels){
    res.json(foundHotels);
  })
  .catch(next);
});

module.exports = router;