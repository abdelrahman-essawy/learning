'strict mode'


let myHttp = new XMLHttpRequest();
myHttp.open('GET', 'https://api.themoviedb.org/3/trending/all/week?api_key=384d8dfa8859f8bf3f596c1cf4a030a2', true)
myHttp.send()

let moviesList = []
let content = ``


myHttp.addEventListener('readystatechange', () => {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        console.log(JSON.parse(myHttp.response))
        moviesList = JSON.parse(myHttp.response).results
        displayMovies(moviesList)
    }
    let moviesListMap = new Map(Object.entries(moviesList));

    for (const [index, movie] of moviesListMap) {
        // console.log(index,movie)
    }

    console.log(moviesList)
})


function displayMovies(moviesList) {
    for (let i = 0; i < moviesList.length; i++) {
        const movie = moviesList[i];
        if (movie.name) {
            content += `
            <div class="col-md-4 my-5">
            <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}">
            <h3>${movie.name}</h3>
            </div>
            `
        }
        if (movie.title) {
            content += `
            <div class="col-md-4 my-5">
            <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}">
            <h3>${movie.title}</h3>
            </div>
            `
        }

    }
    document.getElementById('moviesListId').innerHTML = content

}
