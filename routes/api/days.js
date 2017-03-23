
const router = require('express').Router();
const Day = require('../../models').Day;



//get a list of all days
router.get('/', function(req,res,next){
    Day.findAll()
    .then(function(allDays){
        console.log("allDays is ", allDays);
        res.json("found all the days!");
    })
    .catch(next);
});

//get one specific day
router.get('/:dayNum', function(req,res,next){
    Day.findOne({
        where: {
            number: req.params.dayNum
        }
    })
    .then(function(foundDay){
        res.json(foundDay);
    })
    .catch(next);
});

//delete one specific day
router.delete('/:dayNum', function(req,res,next){
     return Day.destroy({
        where: {
            number: req.params.dayNum
        }
    })
    .then(function(deletedDay){
        res.json(deletedDay);
    })
    .catch(next);
});


//post to api/days
router.post('/',function(req,res,next){
    console.log(req.body);
   Day.create(req.body)
    .then(function(dayCreated){
        console.log("We created a day! it is day....", dayCreated.number);
        res.json(dayCreated);
    })
    .catch(next);
});

router.post('/:dayNum/restaurants', function(req,res,next){
  Day.create(req.body)
    .then(function(;
});

// router.get('/:id/restaurants', function(req,res,next){
//   Day.findAll({
//     where: {
//       number: req.params.id
//     }
//   }).then(function(foundDays){
//     console.log(foundDays);
//   });
// });

module.exports = router;
