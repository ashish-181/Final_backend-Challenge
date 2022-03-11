const router = require('express').Router();
let exerciseSetSchema = require('../models/excersiseset_model');
const excerciseSchema = require('../models/excersise_model');
const sessionSchema = require('../models/session_model');

let User = require('../models/user_model');

router.route('/'). get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const DOB = req.body.DOB;
    const trainerRef = req.body.trainerRef;
    const sessions = req.body.sessions;

    const newUser = new User ({
        name,
        email,
        gender,
        phone,
        DOB,
        trainerRef,
        sessions,
    });

    newUser.save()
        .then( () => res.json('User have been added'))
        .catch( err => res.status(400).json('error :' + err));
});

router.route('/createsession/:id').post( (req,res) =>{
    //console.log(req.body.name)
    const number  = req.body.number;
    const suggestedWeight = req.body.suggestedWeight;
    const suggestedReps = req.body.suggestedReps;


    const exercise_set_pushup = new exerciseSetSchema ({
        number : number,
        suggestedWeight:suggestedWeight,
        suggestedReps : suggestedReps,
    });
    const excercise_pushup = new excerciseSchema({
        name:"pushup",
        exerciseSets: exercise_set_pushup
    })
    const workout_pushup = new workoutSchema({
        name:"pushup",
        exercises: excercise_pushup
    });
    //const workout_squat = 

    // const session_push_up = 
    //const session_s 
    const pushup_session = new sessionSchema({
        workout: workout_pushup,
        date: "2022-03-11T00:00:00Z"
    })



    User.findById(req.params.id).then(
        (user) => {
            
        users.session = [pushup_session];
        res.json(users)
        }
        
    );
});


module.exports = router;