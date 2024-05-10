import {
  GET_MOVIES_FULFILLED,
  GET_MOVIES,
  GET_MOVIES_PENDING,
  GET_MOVIE,
  GET_MOVIE_FULFILLED,
} from '../config/constants';

const initialState = {
  isLoading: false,
  loading: false,
  movie_list: [],
  movie_details: [],
};

const moviesReducer = (state = initialState, action) => {
   switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_FULFILLED:
      return {
        ...state,
        loading: false,
        movie_list: action.payload,
      };
    case GET_MOVIE_FULFILLED:
      console.log('movie _SUCCESS');
      return {
        ...state,
        loading: false,
        movie_details: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
