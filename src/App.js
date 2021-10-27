import { useState } from "react";
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Ratings } from './Ratings';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const movieList = [
  {
    movie_name: "The Shawshank Redemption (1994)",
    pic: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    rating: 9.2,
    discription: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },

  {
    movie_name: "The Godfather (1972)",
    pic: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 9.1,
    discription: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son."
  },

  {
    movie_name: "The Dark Knight (2008)",
    pic: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.1,
    discription: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },

  {
    movie_name: "12 Angry Men (1957)",
    pic: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    rating: 9.0,
    discription: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
  },

  {
    movie_name: "Schindler's List (1993)",
    pic: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 9.0,
    discription: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },

  {
    movie_name: "The Lord of the Rings: The Return of the King (2003)",
    pic: "https://flxt.tmsimg.com/assets/p33156_p_v10_ab.jpg",
    rating: 8.9,
    discription: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },

  {
    movie_name: "Pulp Fiction (1994)",
    pic: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.8,
    discription: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },

  {
    movie_name: "The Good, the Bad and the Ugly (1966)",
    pic: "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_.jpg",
    rating: 8.8,
    discription: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
  },

  {
    movie_name: "Fight Club (1999)",
    pic: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.8,
    discription: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },

  {
    movie_name: "Inception (2010)",
    pic: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
    rating: 8.7,
    discription: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
  },

];

const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

localStorage.setItem("movies", JSON.stringify(movieList));

export default function App() {

  const [NewMovieList, setNewList] = useState(getFromStorage("movies"));

  const [movieName, setMovieName] = useState("");
  const [moviePic, setMoviePic] = useState("");
  const [movieRatings, setMovieRatings] = useState("");
  const [movieDiscription, setMovieDiscription] = useState("");

  const addMovies = () => {
    const newMovie = {
      movie_name: movieName,
      pic: moviePic,
      rating: movieRatings,
      discription: movieDiscription,

    };
    setNewList([...NewMovieList, newMovie]);
  };


  return (
    <section>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
        <ul>
          <li><Link to="/add-movies">Add Movies</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path exact="/">Home

        </Route>
        <Route path="/movies/:id"><MovieDetails /></Route>
        <Route path="/movies">
          <div className="header">
            <div className="imdb"><img src="https://www.logolynx.com/images/logolynx/8d/8d484bb380fdae2da5bc125a4c513393.png" height="100px" alt=""></img>
              <div>
                <h1 className="header">Top 10 Movies</h1>
              </div>
            </div>
          </div>
          <div className="App">

            {NewMovieList.map((movie, index) => {
              return (

                <div className="removeBox">
                  <Ratings
                    deleteButton={
                      <IconButton onClick={() => {
                        const removeIdx = index;
                        setNewList(NewMovieList.filter((mv, idx) => idx !== removeIdx));
                      }}
                        color="error"
                        aria-label="Delete Movie"
                        component="span">
                        <DeleteIcon />
                      </IconButton>
                    }
                    key={index}
                    movie_name={movie.movie_name}
                    movie_pic={movie.pic}
                    movie_ratings={movie.rating}
                    movie_discription={movie.discription}
                    id={index}
                  />
                </div>
              );
            })};
          </div>

        </Route>
        <Route path="/add-movies">
          <div className="header">
            <div className="imdb"><img src="https://www.logolynx.com/images/logolynx/8d/8d484bb380fdae2da5bc125a4c513393.png" height="100px" alt=""></img>
              <div>
                <h1 className="header">Top 10 Movies</h1>
              </div>
            </div>
          </div>
          <div className="addItems">
            <TextField value={movieName} onChange={(event) => setMovieName(event.target.value)}
              label="Enter Movie Name"
              variant="outlined" />
            <TextField value={moviePic} onChange={(event) => setMoviePic(event.target.value)}
              label="Enter Movie Pic"
              variant="outlined" />
            <TextField value={movieRatings} onChange={(event) => setMovieRatings(event.target.value)}
              label="Your Ratings"
              variant="outlined" />
            <TextField value={movieDiscription} onChange={(event) => setMovieDiscription(event.target.value)}
              label="Description"
              variant="outlined" />
            <Button className="addButton" onClick={addMovies} variant="contained">Add Movie</Button>
          </div>

        </Route>
      </Switch>
      <div className="App">
      </div>
    </section>
  )
}
function MovieDetails() {
  //same name after :<name>
  const { id } = useParams();
  const movie = getFromStorage("movies");
  return (

    <h1>Movie Details {id} </h1>
  );
}



