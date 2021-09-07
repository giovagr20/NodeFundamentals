'use strict'

const express = require('express');

const app = express();

const router = express.Router();

const routerLogin = require('./routes/routes');

const morgan = require("morgan");
//middleware

app.use(express.json());


// Welcome
router.get('/', (req, res)=>{
    res.json({
        message: "Welcome to app"
    });
});

app.all("/access", (req, res, next) => {
    res.json({
        message: "He pasado por aquí"
    });
    next();
})

app.use(morgan("tiny"))
app.use(router);
app.use(routerLogin);


app.listen(8181, (req, res) => {
    console.log(`Server is runnig in port 8181`);
})
