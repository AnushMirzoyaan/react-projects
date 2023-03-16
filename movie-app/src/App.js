import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

function App() {

  const [movieData, setMovieData] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('all')

  useEffect(() => {
    getData()
  }, [query])

  const getData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/${query}/day?api_key=31519a0178f10f36103a8aa3fe93c515`)
    const data = await response.json()
    setMovieData(data.results)
    console.log(movieData);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    console.log(search);
    setSearch('')
    setQuery('all')
  }

  return (
    <div className='App'>
      <form
        onSubmit={getSearch}
        className='search-form'
      >
        <input
          placeholder='search for movie'
          type="text"
          value={search}
          className='search-bar'
          onChange={updateSearch}
        />
        <button
          className='search-button'
          type='submit'>Search</button>
      </form>

      <div className='movieContainer'>
        {movieData.map(movie => (
          <Movie
            key={movie.overview}
            overview={movie.overview}
            title={movie.title ? movie.title : movie.name}
            imageLink={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
