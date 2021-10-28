import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from "react";
import { getFromStorage, updateStoredMovies } from "./App";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

export function EditMovie({ NewMovieList, setNewList, type }) {
    const { id } = useParams();
    const history = useHistory();
    const movie = getFromStorage("movies")[id];

    //same as add movie - Initializing with movie details
    const [movieName, setMovieName] = useState(movie.movie_name);
    const [moviePic, setMoviePic] = useState(movie.pic);
    const [movieRatings, setMovieRatings] = useState(movie.rating);
    const [movieDiscription, setMovieDiscription] = useState(movie.discription);
    const [movieTrailer, setMovieTrailer] = useState(movie.trailer);

    //Find the element and update the data
    const editMovie = () => {
        const newMovie = {
            movie_name: movieName,
            pic: moviePic,
            rating: movieRatings,
            discription: movieDiscription,

        };
        //Create copy of movies
        //Replace with edited movies
        let updatedMovies = [...NewMovieList];
        updatedMovies[id] = newMovie;
        setNewList(updatedMovies);
        updateStoredMovies(updatedMovies); //replacing
        history.push("/movies");
    };

    return (<Card>
        <div className="addItems">
            <TextField value={movieName} onChange={event => setMovieName(event.target.value)} label="Enter Movie Name" variant="outlined" />
            <TextField value={moviePic} onChange={event => setMoviePic(event.target.value)} label="Enter Movie Pic" variant="outlined" />
            <TextField value={movieRatings} onChange={event => setMovieRatings(event.target.value)} label="Your Ratings" variant="outlined" />
            <TextField value={movieDiscription} onChange={event => setMovieDiscription(event.target.value)} label="Description" variant="outlined" />
            <TextField value={movieTrailer} onChange={event => setMovieTrailer(event.target.value)} label="Movie Trailer" variant="outlined" />
            <Button className="addButton" onClick={editMovie} variant="contained">Edit Movie</Button>

        </div>
    </Card>);
}
