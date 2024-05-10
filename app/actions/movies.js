import {httpClient, setAuthorizationToken} from '../config/api';
import {GET_MOVIE, GET_MOVIES} from '../config/constants';
import { Constants } from "../appconstants/AppConstants";
export function getMovieList(pageNumber) {
  //const MOVIE_LIST = `movie/now_playing?api_key=${Constants.API_KEY}&language=en-US`;

  return {
    type: GET_MOVIES,
    payload: httpClient.get(
      'discover/movie?page='+pageNumber,
    ),
  };
}
export function getMovie(movieId) {
  alert(movieId);
  return {
    type: GET_MOVIE,
    payload: httpClient.get(`movie/${movieId}?language=en-US`),
  };
}
