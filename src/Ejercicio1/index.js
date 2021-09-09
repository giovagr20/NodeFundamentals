
const express = require('express');
const morgan = require('morgan');
const app = express();

//Get module routes
const routerUsers = require('./routes/users.routes');

//Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use("/api", routerUsers);

//Settings servers
app.set('port', process.env.PORT || 3000);

//Run server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port: ${app.get('port')}`);
});