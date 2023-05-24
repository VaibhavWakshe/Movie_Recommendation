const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');

searchButton.addEventListener('click', searchMovies);

function searchMovies() {
  const query = searchInput.value;

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Make API request to fetch movie data
  // Replace 'YOUR_API_KEY' with your actual API key
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      movies.forEach(movie => {
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        resultsContainer.appendChild(movieTitle);
      });
    })
    .catch(error => {
      console.error(error);
    });
}