
function paso1(callback){
    console.log("Paso 1")
    setTimeout(function(){
        console.log("...1 seg pasó")
        callback();
    }, 1000)
    
}

function paso2() {
    console.log("Paso 2: Esto pasa despues...")
}

//console.log("Paso un 1 seg")
paso1(paso2);




/*

function enUnSegundo (){
    console.log("Paso un 1 seg")
}

console.log("Esto pasa primero")

var lista = [1,"hello",2, "hello again"]

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

setTimeout(enUnSegundo, 1000);

console.log("Esto pasa despues...")

*/