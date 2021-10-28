import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';



export function Ratings({ movie_name, movie_pic, movie_ratings, movie_discription, deleteButton, id, editButton }) {

    const [show, setShow] = useState(false);

    const history = useHistory();
    return (

        <div className="section">
            <div className="container">
                <div className="imageContainer"><img className="moviePics" src={movie_pic} alt="images"></img></div>
                <div className="reviews">
                    <img className="logo" src="https://www.logolynx.com/images/logolynx/8d/8d484bb380fdae2da5bc125a4c513393.png" alt="IMDB"></img>
                    <h4>⭐️{movie_ratings}</h4>
                    <Counter />
                </div>

                <hr></hr>
                <Card >
                    <CardContent>
                        <h3 className="movie_name">
                            {movie_name}
                            <IconButton
                                onClick={() => history.push("/movies/" + id)}
                                color="primary"
                                aria-label="Detailed info about movie"
                            >
                                <InfoIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => setShow(!show)}
                                color="primary"
                                aria-label="Movie Description"
                            >
                                {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </h3>
                        {show ? <h5 className="discription">{movie_discription}</h5> : ""}

                    </CardContent>
                    <CardActions>
                        {editButton}
                        {deleteButton}
                    </CardActions>
                </Card>
            </div>
        </div >
    );
}
