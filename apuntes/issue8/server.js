const express = require("express")
const app = express();

app.get("/", (req, res)=>{
    res.send("Hola mundo!!")
})

app.get("/otra-ruta", (req, res)=>{
    console.log("Query Params:", req.query)
    res.send("otra ruta....")
})


app.get("/de/:ciudad_origen/a/:ciudad_destino", (req, res)=>{
    res.send(`Tu me dices que vienes de ${req.params.ciudad_origen} y piensas ir a ${req.params.ciudad_destino}`)
})

app.listen(8080, ()=>{
    console.log("Ya estamos online!")
})
