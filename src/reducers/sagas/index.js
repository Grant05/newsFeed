import { call, put, takeEvery } from 'redux-saga/effects';
import { router, createBrowserHistory } from 'redux-saga-router';
import axios from 'axios';

import { receiveArticles } from './../articles/actions';
import { receiveTopics } from './../topics/actions';

// news API
import { articlesAPI, topicsAPI, getSingleArticleAPI } from './../../secret.js';

// const history = createBrowserHistory();
// const routes = {
//   '/articles/:id': function* getSingleArticleAPI({ id })
// }

// Worker sagas
export function* getArticlesData(action) {
  try {
    // trying to call API
    const data = yield call(axios.get, articlesAPI);
    yield put(receiveArticles(data.data));
  } catch (e) {
    // handle errors
  }
}
// fetch single article and routing
export function* getSingleArticleData(action) {
  try {
    const data = yield call(axios.get, getSingleArticleAPI(action.payload.id));
    if (data) {
      yield put(receiveArticles(data.data));
      action.payload.callback();
    }
  } catch (e) {
  }
}

export function* getTopicsData(action) {
  try {
    const data = yield call(axios.get, topicsAPI);
    yield put(receiveTopics(data.data));
  } catch (e) {
  }
}

// Watcher saga: spawn a new async task on each ACTION
export function* watchArticles() {
  yield [
    takeEvery('REQUEST_ARTICLES', getArticlesData),
    takeEvery('REQUEST_SINGLE_ARTICLE', getSingleArticleData),
  ];
}

export function* watchTopics() {
  yield takeEvery('REQUEST_TOPICS', getTopicsData);
}

// root entry point to start sagas at once
export default function* rootSaga() {
  yield [
    watchArticles(),
    watchTopics(),
  ];
}
