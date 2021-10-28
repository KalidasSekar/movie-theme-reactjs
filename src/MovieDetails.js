import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getFromStorage } from "./App";

export function MovieDetails() {
    //same name after :<name>
    const { id } = useParams();
    const movie = getFromStorage("movies")[id];
    const history = useHistory();

    return (
        <div className="movie-info">
            <iframe
                width="100%"
                height="441"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>

            <div className="movieDetail">
                <h1>{movie.movie_name}</h1>
                <p>{movie.discription}</p>

                <Button
                    onClick={() => history.goBack()}
                    variant="contained" startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
            </div>
        </div>
    );
}
