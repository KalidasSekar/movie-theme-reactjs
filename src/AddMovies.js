import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from "react";
import { updateStoredMovies } from "./App";
import { useHistory } from 'react-router';

export function AddMovies({ NewMovieList, setNewList, type }) {
    const history = useHistory();
    const [movieName, setMovieName] = useState("");
    const [moviePic, setMoviePic] = useState("")
    const [movieRatings, setMovieRatings] = useState("")
    const [movieDiscription, setMovieDiscription] = useState("")
    const [movieTrailer, setMovieTrailer] = useState("")

    const addMovies = () => {
        const newMovie = {
            movie_name: movieName,
            pic: moviePic,
            rating: movieRatings,
            discription: movieDiscription,

        };
        setNewList([...NewMovieList, newMovie]);
        updateStoredMovies([...NewMovieList, newMovie]);
        history.push("/movies");
    };

    return (<Card>
        <div className="addItems">
            <TextField value={movieName} onChange={event => setMovieName(event.target.value)} label="Enter Movie Name" variant="outlined" />
            <TextField value={moviePic} onChange={event => setMoviePic(event.target.value)} label="Enter Movie Pic" variant="outlined" />
            <TextField value={movieRatings} onChange={event => setMovieRatings(event.target.value)} label="Your Ratings" variant="outlined" />
            <TextField value={movieDiscription} onChange={event => setMovieDiscription(event.target.value)} label="Description" variant="outlined" />
            <TextField value={movieTrailer} onChange={event => setMovieTrailer(event.target.value)} label="Movie Trailer" variant="outlined" />

            {type === "EDIT" ? (
                <Button className="addButton" onClick={addMovies} variant="contained">Edit Movie</Button>)
                : (<Button className="addButton" onClick={addMovies} variant="contained">Add Movie</Button>)}

        </div>
    </Card>);
}
