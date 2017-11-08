import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './../containers/Home'
import Topics from './../containers/Topics'
import ArticlePage from './../containers/ArticlePage'

class App extends Component {

  render () {
    return (
      <div id="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/topics" component={Topics} />
            <Route path="/article/:id" component={ArticlePage} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
