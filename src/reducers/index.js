import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import articles from './articles'
import topics from './topics'
import subscriptions from './subscriptions'

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
  articles,
  topics,
  subscriptions,
})

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
