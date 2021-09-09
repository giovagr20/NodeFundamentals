const express = require('express');
const users = require('../users');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        app: "Welcome app"
    });
});

router.get('/user/', (req, res) => {
    const user = users.find(element => element.id === req.body.id);
    if(!user) {
        res.json({response: "User not found"});
    } else {
        res.json(user);
    }
});


router.post('/user/', (req, res) => {
    const user = req.body;
    
    console.log(user.Cargo);

    if(user.id === undefined || user.Name === undefined 
        || user.Apellido === undefined || user.Age === undefined
        || user.Cargo === undefined) {
            res.json({ "Usuario no fue agregado, no cumple el formato":user });
        }
    else res.json({"Usuario agregado": user });
    
});


router.delete('/delete/', (req, res) => {
    const id = req.body.id;
    if(id === null) { 
        res.json({
            error: "Por favor enviar un id"
        });
    }
    const user = users.find(element => element.id === req.body.id);

    const findPosition = users.findIndex(element => element.id === req.body.id);
    if(!user) {
        res.json({response: "User not found"});
    } else {
        users.slice(0, findPosition-1);
        res.json({response: "User deleted"});
    }
});

module.exports = router;