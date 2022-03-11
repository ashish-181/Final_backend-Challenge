const router = require('express').Router();
//const { default: mongoose } = require('mongoose');
//const { json } = require('express');
let trainer = require('../models/trainer_model');

router.route('/').get((req,res) =>{
    trainer.find()
        .then(trainers => res.json(trainers))
        .catch(err => res.status(400).json('error: ' + err));
});

router.route('/add'). post((req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const userRefs = req.body.userRefs;

    const newtrainer = new trainer({
        name,
        email,
        userRefs,
    });

    newtrainer.save()
        .then(() => res.json('Trainer added'))
        .catch(err => res.status(400).json('error: ' + err));
});



module.exports = router;