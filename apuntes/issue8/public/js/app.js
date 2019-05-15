

// POSTMAN HACK

function getFilm(id){
    ajaxHandler({
        url: `/api/movies/${id}`
    })
        .then(showResponse)
        .catch(console.warn)
}

function getAllFilms () {
    ajaxHandler()
        .then(showResponse)
        .catch(console.warn)
}

function createFilm (title) {
    ajaxHandler({
        method: "POST",
        payload: {title}
    }).then(showResponse)
    .catch(console.warn)
}

function updateFilm (id, data) {
    ajaxHandler({
        method: "PUT",
        payload: {id, data}
    }).then(showResponse)
    .catch(console.warn)
}

function deleteFilm (id) {
    ajaxHandler({
        method: "DELETE",
        payload: {id}
    }).then(showResponse)
    .catch(console.warn)
}


function showResponse (data) {
    document.body.innerHTML = `<pre><code>${JSON.stringify(data, null, 2)}</code></pre>`
}

function ajaxHandler (config={}) {
    const url = config.url || "/api/movies";
    
    const cnf = {
        method: config.method || "GET",
         headers:{
            'Content-Type': 'application/json'
          },
        body: config.payload ? JSON.stringify(config.payload) : undefined
    }
    
    return window.fetch(url, cnf).then(res => res.json())
}