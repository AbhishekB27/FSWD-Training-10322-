const express = require('express')
const { path } = require('express/lib/application')
const fs = require('fs')
const app = express()
app.get('/',(req,res)=>{
    res.send('response')
    console.log(req.query)
})

app.get('/About',(req,res)=>{
    res.send('About Page')
})
app.get('/Home',(req,res)=>{
    res.send('Home Page')
})
console.log(app)
app.listen(8080,()=>{
    console.log(`server started at port: ${8080}`)
})

