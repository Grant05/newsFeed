import React, { Component } from 'react'
import { connect } from 'react-redux'
import secretAPI from './../secret'
import { requestArticles } from '../reducers/articles/actions'

import Article from './Article'

class Home extends Component {

//Request then render articles on Home page
  componentDidMount() {
    this.props.requestArticles()
    console.log('Home props: ', this.props)
    console.log('history home: ', this.props.history)
  }

  render () {
    const { articles, subscriptions } = this.props
    const subscribedTopics = subscriptions.map((topic) => topic.name)
    console.log('subscribedTopics: ', subscribedTopics)
    const filteredArticles = articles.filter((article) => {
      return article.topics.reduce((bool, topic) => {
        if (bool) {
          return bool
        } else {
          if (subscribedTopics.includes(topic.name)) {
            bool = true;
            return bool;
          }
        }
      }, false)
    })

    if (filteredArticles.length) {
      return (
        <div className="home">
          {filteredArticles.map((data) =>
            <Article key={data.id} {...data} history={this.props.history} />
          )}
        </div>
      )
    } else {
      return (
        <div className="home">
          {articles.map((data) =>
            <Article key={data.id} {...data} history={this.props.history}/>
          )}
        </div>
      )
    }
  }

}

export default connect(
  (state) => ({
    articles: state.articles,
    subscriptions: state.subscriptions,
  }),
  { requestArticles }
)(Home)
