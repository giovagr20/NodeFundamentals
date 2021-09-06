'use strict'

const express = require('express');

const app = express();

const router = express.Router();

const routerLogin = require('./routes/routes');
//middleware

app.use(express.json());


// Welcome
router.get('/', (req, res)=>{
    res.json({
        message: "Welcome to app"
    });
});


app.use(router);
app.use(routerLogin);


app.listen(8181, (req, res) => {
    console.log(`Server is runnig in port 8181`);
})
