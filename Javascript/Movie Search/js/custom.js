APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

IMAGEPATH = 'https://image.tmdb.org/t/p/w1280';

SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

var movieData = [];

var movieFetch = async () => {
    var response = await fetch(APIURL);
    var data = await response.json();
    movieData = data.results;
    displayData();
}

movieFetch();

var searchMovie = async (name) => {
    var name = name.value;
    var response = await fetch(SEARCHAPI + name);
    var data = await response.json();
    movieData = data.results;
    displayData();
}

function displayData(){
    var data = '';

    movieData.forEach(function(movie){


    data += `<div class="movie-card">
                    <div class="movie-poster">
                        <img src="${IMAGEPATH}${movie.poster_path}" alt="Movie Poster" style="width:100%;height:100%;object-fit:cover;border-radius:4px 4px 0 0;">
                    </div>
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                    </div>
                </div>`;
});

document.querySelector('.results').innerHTML = data;
}
