import React from 'react';
import { connect } from 'react-redux';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import SimpleForm from './form/SimpleForm';
import AgGrid from './AgGrid';
import '../index.css';
import {
  addMovies,
  setShowFavourites,
  addAgGridRowData,
  showGridData,
} from '../redux/actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
    this.props.dispatch(showGridData(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;
  }; 

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  addRowDataToAgGrid = (values) => {
    console.log('values==', values);
    this.props.dispatch(addAgGridRowData(values));
  };

  render() {
    const { movies, search } = this.props; // will return { movies: {}, search: []}

    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="np-movies">No favourite movie!</div>
          ) : null}
        </div>
        <SimpleForm onSubmit={this.addRowDataToAgGrid} />
        <AgGrid />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('App state', state);
  return {
    movies: state.movies,
    search: state.search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
