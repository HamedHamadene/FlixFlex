// import {createStore, combineReducers} from 'redux';
// import moviesReducer from '../reducers/moviesReducer';
// const rootReducer = combineReducers({movies: moviesReducer});
// const configureStore = () => {
//   return createStore(rootReducer);
// };
// export default configureStore;

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createPromise} from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {name as appName} from '../../app.json';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { createSelector } from 'reselect';
const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
};

const middleware = [thunkMiddleware, createPromise()];

if (__DEV__ === true) {
  middleware.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  middleware,
  // applyMiddleware(...middleware),
);
export const persistor = persistStore(store);
 

