const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());


function calculate(n){
    return n + n;

}
app.get('/test', (req, res)=> {
    res.send('Hello How are')
}) 

app.post('/auth', (req, res)=> {
    const token = req.headers.authorization
    const userName = req.body.name
   token === '12345' ? res.json({
    message: 'Access Granted',
    user : userName
   }) : res.send("Access Denied!")
})


app.get('/', (req, res)=> {
    res.send("Love You Baby..")
})


app.post('/calculate', (req, res)=> {
    const n = req.body.number
    const answer = calculate(n);
    res.json({
        answer : answer
    })
})

app.listen (port, ()=> {
    console.log(`Listening on port: ${port}`)
    
})