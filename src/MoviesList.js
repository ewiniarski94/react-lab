export default function MoviesList(props) {

    return (<div><h1>Titles</h1>
        <ul>
            {props.movies.map(movie => <li key={movie.title}>{movie.title} {movie.year}</li>)}
        </ul>
    </div>
    );
}