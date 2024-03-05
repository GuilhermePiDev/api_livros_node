const express = require("express")
const app = express()
const mongoose = require("mongoose")

const port = 8080
const livrosRoute = require('./routes/livrosRoute')
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(livrosRoute)
mongoose.connect("mongodb://localhost:27017")
.then( result =>{
    app.listen(port, ()=>{
        console.log("Server on! rodando na porta "+port)
    })
})
.catch((error)=>console.log(error))