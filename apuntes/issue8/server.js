const express = require("express")
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.use(express.static("public"))

// GET /movies/:id -> Detalles de una pelicula
app.get("/api/movies/:id", (req, res) => {
    res.json({msg: `Detalles de una pelicula ${req.params.id}`})
})

// GET /movies -> lista de peliculas
app.get("/api/movies", (req, res) => {
    res.json({msg: `Lista de peliculas`})
})

//POST /movies -> Crearía una pelicula
app.post("/api/movies", (req, res) => {
    const {title} = req.body;
    res.json({msg: `Crear una pelicula desde ${title}`})
})

//  PUT /movies -> Actualizaría una pelicula
app.put("/api/movies", (req, res) => {
    const {id, data} = req.body;
    res.json({msg: `Actualizar una pelicula ${id} con ${data}`})
})

// DELETE /movies -> Borrar una pelicula
app.delete("/api/movies", (req, res) => {
    const {id} = req.body;
    res.json({msg: `Borrar una pelicula ${id}`})
})


app.listen(8080, ()=>{
    console.log("Ya estamos online!")
})
