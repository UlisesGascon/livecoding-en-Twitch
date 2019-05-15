const firebase = require("firebase")
const {firebaseConfig, firebasePath} = require("../config")

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref(firebasePath);

function create (data) {
    return db.push(data).then(data => ({id:data.key}))
}

function update (id, data) {
    return db.child(id).update(data)
}

function remove (id) {
    return db.child(id).remove()
}

function listItem (id) {
    // @TODO: Refactor
    return new Promise((resolve, reject) => {
        db.child(id).once("value", snapshot => {
            const data = snapshot.val();
            resolve(data ? data : false)
        }, reject)
    })
    
    
    
}

function listAllItems () {
    return new Promise((resolve, reject) => {
        db.once("value", snapshot => {
            resolve(snapshot.val())
        }, reject)
    }) 
}

module.exports = {create, update, remove, listItem, listAllItems}