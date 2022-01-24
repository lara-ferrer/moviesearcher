/**
Declare global APIs
**************************************/

var movieAPI = 'https://movieapi-daw.azurewebsites.net/Movie'
var categoryAPI = 'https://movieapi-daw.azurewebsites.net/Category'
var headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

/**
Get sites
**************************************/

window.onload = function () {
    fetch(movieAPI, {
        method: 'GET',
        headers: headers
    }).then(response => {
        return response.json()
    }).then(data =>
        getMovies(data)
    );
}

function getMovies(response) {
    let listGroup = document.getElementById('list-group');

    response.forEach(i => {
        let listElement = document.createElement('div');
        let link = document.createElement('a');
        let likes = document.createElement('p');

        link.innerText = i.title;
        link.href = `movies/${i.id}`;
        likes.innerText = `Número de likes: ${i.likes}`;

        listElement.appendChild(link);
        listElement.appendChild(likes);
        listGroup.appendChild(listElement);
    })
}