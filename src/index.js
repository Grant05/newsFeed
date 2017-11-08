import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style.css'

//Redux
import store from './reducers'
import { Provider } from 'react-redux'

//Router
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
