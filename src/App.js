import { useState } from "react";
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from "./MovieDetails";
import { movieList } from "./movieList";
import { AddMovies } from "./AddMovies";
import { EditMovie } from "./EditMovies";
import { MovieApp } from "./MovieApp";
import { AppHeader } from "./AppHeader";
import { HomeBanner } from "./HomeBanner";


export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
export const updateStoredMovies = updateMovies => localStorage.setItem("movies", JSON.stringify(updateMovies));

updateStoredMovies(movieList);


export default function App() {
  const [NewMovieList, setNewList] = useState(getFromStorage("movies"));
  const history = useHistory();
  return (
    <section>
      <AppBar position="static" className="main-menu">
        <Toolbar className="main-menu">
          <div className="imdb"><img src="https://www.logolynx.com/images/logolynx/8d/8d484bb380fdae2da5bc125a4c513393.png" height="50px" alt="imdb-logo"></img>
          </div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/add-movies">Add Movies</Link>
        </Toolbar>
      </AppBar>

      <div className="main-content">
        <Switch>
          <Route path exact="/">
            <HomeBanner>
            </HomeBanner>
          </Route>
          <Route path="/movies/edit/:id">
            <EditMovie NewMovieList={NewMovieList} setNewList={setNewList} type="EDIT" />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <AppHeader></AppHeader>

            <MovieApp NewMovieList={NewMovieList}
              setNewList={setNewList}
              push={history.push}>
            </MovieApp>
          </Route>

          <Route path="/add-movies">
            <AddMovies NewMovieList={NewMovieList} setNewList={setNewList} type="ADD" />
          </Route>
        </Switch>
      </div>
    </section>
  );
}


