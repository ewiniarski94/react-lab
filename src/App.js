import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    function handleAddMovie(){
        const movie = {
            title: title,
            year: year,
        };
        setMovies([...movies, movie]);
        setTitle('');
        setYear('');

    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} {movie.year}</li>)}
            </ul>
            <h2>Add movie</h2>
            <label>Tytuł</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>

            <label>Rok wydania</label>
            <input type="text" value={year} onChange={(event) => setYear((event.target.value))}/>

            <button onClick={handleAddMovie}>Dodaj film</button>
        </div>
    );
}

export default App;
