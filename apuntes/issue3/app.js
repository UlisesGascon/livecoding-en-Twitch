/*
var ulises =  {
    nombre: "Ulises",
    relevante: true,
    ruidoso: 1,
    moderar: true
}

var baumann = {
    nombre: "Jorge",
    relevante: false,
    ruidoso: 15,
    moderar: false
}


var theba = {
    nombre: "Theba",
    relevante: true,
    ruidoso: 10,
    moderar: true
}

var personas = [theba, baumann, ulises];
*/


fetch("personas.json")
    .then(res => res.json())
    .then(updateUI)

function userTemplate (user){
    return `<li>${user.nombre}</li>`
} 

function updateUI (personas) {
    var userSlctr = document.getElementById("users")
    userSlctr.innerHTML = personas.map(userTemplate).join("")
    
    var modSlctr = document.getElementById("mod")
    modSlctr.innerHTML = personas.filter(person => person.moderar).map(userTemplate).join("")
    
    var ruidoSlctr = document.getElementById("ruido")
    const ruidosos = personas.sort((p1, p2) => p2.ruidoso - p1.ruidoso)
    ruidoSlctr.innerHTML = userTemplate(ruidosos[0])


}


