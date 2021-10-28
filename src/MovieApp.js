import { Ratings } from './Ratings';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { updateStoredMovies } from "./App";


export function MovieApp(props) {
    return (
        <div className="App">

            {props.NewMovieList.map((movie, index) => {
                return <div className="removeBox">
                    <Ratings deleteButton={<IconButton onClick={() => {
                        const removeIdx = index;
                        props.setNewList(props.NewMovieList.filter((mv, idx) => idx !== removeIdx));
                        updateStoredMovies(props.NewMovieList.filter((mv, idx) => idx !== removeIdx));
                    }} color="error" aria-label="Delete Movie" component="span">
                        <DeleteIcon />
                    </IconButton>} editButton={<IconButton onClick={() => props.push("/movies/edit/" + index)} color="secondary" aria-label="Edit Movie">
                        <EditIcon />
                    </IconButton>} key={index} movie_name={movie.movie_name} movie_pic={movie.pic} movie_ratings={movie.rating} movie_discription={movie.discription} id={index} />
                </div>;
            })};
        </div>);
}
