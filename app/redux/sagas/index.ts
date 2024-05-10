import {all} from 'redux-saga/effects';
import combineSagas from "./movieLists";

export default function* rootSaga() {
    yield all([...combineSagas]);
}