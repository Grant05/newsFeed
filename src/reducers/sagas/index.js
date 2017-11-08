import { call, put, takeEvery } from 'redux-saga/effects';
import { router, createBrowserHistory } from 'redux-saga-router'
import axios from 'axios';

import { receiveArticles } from './../articles/actions'
import { receiveTopics } from './../topics/actions'

//news API
import { articlesAPI, topicsAPI, getSingleArticleAPI } from './../../secret.js'

// const history = createBrowserHistory();
// const routes = {
//   '/articles/:id': function* getSingleArticleAPI({ id })
// }

//Worker sagas
export function* getArticlesData(action) {
  try {
    //trying to call API
    console.log('Attempting to fetch ARTICLES data');
    console.log('action being run...: ', action)
    const data = yield call(axios.get, articlesAPI)
    console.log('Response: ', data)
    yield put(receiveArticles(data.data))
  } catch (e) {
    //handle errors
    console.log('Failed to retrieve data from api')
  }
}
//fetch single article and routing
export function* getSingleArticleData(action) {
  try {
    console.log('Attempting to fetch ARTICLE data...');
    console.log('action being run...: ', action)
    const data = yield call(axios.get, getSingleArticleAPI(action.id))
    console.log("RESPONSE FROM SINGLE ARTICLE API: ", data);
    yield put(receiveArticles(data.data))

  } catch (e) {
    console.log('Failed to retrieve data from api')
  }
}

export function* getTopicsData(action) {
  try {
    console.log('Attempting to fetch TOPICS data')
    const data = yield call(axios.get, topicsAPI)
    console.log('topics RESPONSE: ', data)
    yield put(receiveTopics(data.data))
  } catch (e) {
    console.log('Failed to retrieve data from api')
  }
}

//Watcher saga: spawn a new async task on each ACTION
export function* watchArticles() {
  yield [
    takeEvery('REQUEST_ARTICLES', getArticlesData),
    takeEvery('REQUEST_SINGLE_ARTICLE', getSingleArticleData)
  ]

}

export function* watchTopics() {
  yield takeEvery('REQUEST_TOPICS', getTopicsData);
}

//root entry point to start sagas at once
export default function* rootSaga() {
  yield [
    watchArticles(),
    watchTopics(),
  ]
}
