const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Port = 3000;
app.use(bodyParser.json());
const controller = require('./controller');
const middleWare = require('./middleware')
app.listen(Port,()=>{
    console.log(`Listening On Port: ${Port}`);
})


app.get('/', middleWare.auth, controller.responser);


