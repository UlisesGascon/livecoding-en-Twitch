const EventEmitter = require('events').EventEmitter;

const pingPong = new EventEmitter();

setInterval(() => {
    pingPong.emit("channel8", {date: new Date()})
    pingPong.emit("SOS", {msg: "Help me!!"})
}, 1000)

pingPong.once("channel8", (data) => {
    console.log("Solo una vez", data.date)
})

pingPong.on('channel8', (data) => {
    console.log("Nuevo mensaje", data.date)
})