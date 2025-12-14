import {useState} from "react";

function App() {
    const [title, setTitle] = useState('');
    const button = "Pokaż tytuł filmu";

    let message = '';
    if (title.length < 5) {
        message = 'Title is too short!';
    } else if (title.length < 10) {
        message = 'Title is good!';
    } else if (title.length >= 10) {
        message = 'Title is too long!';
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            {
                title.length > 0 && <div>{message}</div>
            }
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button onClick={() => alert(title)}>{button}</button>
        </div>
    );
}

export default App;