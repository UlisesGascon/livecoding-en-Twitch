const db = require("../models/db")
const {generateMovieDetails} = require("../lib/ombd")

function create (req, res, next) {
  req.body = req.body || {}
  const { title } = req.body
  //@TODO: Middelware migration
  if(!title) {
      res.status(400).json({msg: "Faltan datos!"})
  }
  generateMovieDetails(title)
    .then(db.create)
    .then(data => res.status(201).json(data))
    .catch(next)
  
}
function remove (req, res, next) {
  const { id } = req.body
  //@TODO: Middelware migration
  if(!id) {
      res.status(400).json({msg: "Faltan datos!"})
  }
  
  db.remove(id)
    .then(data => res.status(201).json({msg: "Elemento borrado con exito"}))
    .catch(next)   

}
function update (req, res, next) {
  const { id, data } = req.body
  
  //@TODO: Middelware migration
  if(!id || !data) {
      res.status(400).json({msg: "Faltan datos!"})
  }
  
  db.update(id, data)
  .then(data => res.json({msg: "datos actualizados con éxito"}))
  .catch(next)
  
  //res.json({ msg: `Actualizar una pelicula ${id} con ${data}` })
}

function getItem (req, res, next) {
    db.listItem(req.params.id)
        .then(data => {
            if(data) {
                return res.json(data)
            }
            res.status(404).json({msg: "No tengo nada con ese id..."})
        })
        .catch(next)
    
  //res.json({ msg: `Detalles de una pelicula ${req.params.id}` })
}
function getAll (req, res, next) {
    db.listAllItems()
    .then(data => res.json(data))
    .catch(next)
    //res.json({ msg: `Lista de peliculas` })
}

module.exports = { create, remove, update, getItem, getAll }
