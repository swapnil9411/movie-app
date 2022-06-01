import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_API_DATA,
  receiveApiData,
  addMovieSearchResult,
} from '../actions';
import { fetchData } from './api';

function* getApiData(actions) {
  console.log('movie search in saga', actions.payload);
  try {
    const data = yield call(fetchData, actions.payload);
    console.log('data fetched=', data);
    // yield put({ type: 'RECEIVE_API_DATA', payload: data });
    yield put(receiveApiData(data));
    yield put(addMovieSearchResult(data));
  } catch (e) {
    console.log(e);
  }
}

export function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
