import {useEffect, useState} from 'react';
import './App.css';
import Movie from './components/Movie';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

function App() {

    const [movieData, setMovieData] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('all/day')

    useEffect(() => {
        getData()
    }, [query])

    const getData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/${query}?api_key=${REACT_APP_API_KEY}`)
        const data = await response.json()
        setMovieData(data.results)
        console.log(movieData);
    }
    ``
    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        console.log(search);
        setSearch('')
        // setQuery('all/day')
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
                    type='submit'>Search
                </button>
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
