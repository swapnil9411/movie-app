import React from 'react';
import { addFavourite, removeFromFavourites } from '../redux/actions/index';
import '../index.css';

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    console.log('moviecard-props', this.props);
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {this.props.isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
