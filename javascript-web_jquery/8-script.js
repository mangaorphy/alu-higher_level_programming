//JavaScript that fetches and lists the tittle for all movies by using this URL:  https://swapi-api.alx-tools.com/api/films/?format=json

$.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    type: 'GET',
    success: function(data) {
        // Get the list of movie titles
        let movieTitles = data.results.map(function(movie) {
            return movie.title;
        });

        // Add the movie titles to the list
        let $list = $('#list_movies');
        movieTitles.forEach(function(title) {
            $list.append('<li>' + title + '</li>');
        });
    }
});