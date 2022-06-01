export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_ROW_DATA = 'ADD_ROW_DATA;';
export const SHOW_GRID_DATA = 'SHOW_GRID_DATA';
export const ADD_MOVIE_TO_GRID = 'ADD_MOVIE_TO_GRID';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export function addMovies(movie) {
  return {
    type: ADD_MOVIES,
    movies: movie,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie: movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie: movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val: val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

// Asynchronous call using Redux-thunk

// export function handleMovieSearch(movie) {
//   const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log('movie', movie);

//         // dispatch an action
//         dispatch(addMovieSearchResult(movie));
//       });
//   };
// }

export function addMovieSearchResult(payload) {
  return {
    type: ADD_SEARCH_RESULT,
    payload,
  };
}

export function addAgGridRowData(rowData) {
  return {
    type: ADD_ROW_DATA,
    rowData,
  };
}

export function showGridData(data) {
  return {
    type: SHOW_GRID_DATA,
    data,
  };
}

export function addMovieToGrid(movie) {
  return {
    type: ADD_MOVIE_TO_GRID,
    movie,
  };
}

export function requestApiData(payload) {
  return {
    type: REQUEST_API_DATA,
    payload,
  };
}

export function receiveApiData(payload) {
  return {
    type: RECEIVE_API_DATA,
    payload,
  };
}
