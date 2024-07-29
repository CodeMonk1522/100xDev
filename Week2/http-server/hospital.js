const express = require('express');
const app = express ();
const port = 3000;

let kidneyCount = 0;
app.get('/getKidney', (req,res)=>{
    res.status(200).send('Kidney Count is:',kidneyCount);
})

app.post('/addKidney', (req,res)=>{
    kidneyCount++;
    res.status(200).send('Kidney Count Updated', kidneyCount)
})

app.put('/healthKidney', (req,res)=>{
    kidneyCount = 0
    res.status(200).send('Kidney is healthy', kidneyCount)
})

app.delete('/removeKidney', (req,res)=>{
    kidneyCount--;
    res.status(200).send("kidney Removed Successfully", kidneyCount)
})
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})