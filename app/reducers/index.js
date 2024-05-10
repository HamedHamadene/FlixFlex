import {combineReducers} from 'redux';

import moviesReducer from './moviesReducer';

const appReducer = combineReducers({
  movies: moviesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
