const router = require('express').Router();
const Activity = require('../../models').Activity;

router.get('/', function(req, res, next){
  Activity.findAll({})
  .then(function(foundActivities){
    res.json(foundActivities);
  })
  .catch(next);
});

module.exports = router;