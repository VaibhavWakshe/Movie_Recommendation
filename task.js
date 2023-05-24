import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Movie Recommendation</h1>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;