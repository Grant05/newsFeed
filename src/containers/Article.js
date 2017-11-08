import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { requestSingleArticle } from '../reducers/articles/actions'

class Article extends Component {

  handleClick = () => {
    this.props.requestSingleArticle(this.props.id)
  }

  render () {
    let picture;
    if (this.props.media.length) {
      picture = this.props.media[0].url
    } else {
      picture="#"
    }
    return (
      <div className="main-article">
        <h2 className="article-sh">{this.props.title}</h2>
        <div className="article-sh-container">
          <h4 className="article-org">{this.props.attribution.displayName.toUpperCase()}</h4>
          <p className="article-date">{moment(this.props.createdAt).format('MMM-DD-YYYY')}</p>
        </div>
        <img className="article-picture" src={picture} />
        <p className="article-p">{this.props.summary}</p>
        <p className="article-con" onClick={this.handleClick}>Read More</p>
        <hr />
        <div className="topics-container">
          {this.props.topics.map((topic) => <button type="button" className='btn topic' key={topic.id}>{topic.name}</button>)}
        </div>
        <hr />
        <button type="button" className='btn like'><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {this.props.likesCount}</button>
        <button type="button" className='btn comment'><i className="fa fa-comment-o" aria-hidden="true"></i> Comment</button>
        <button type="button" className='btn save'><i className="fa fa-bookmark-o" aria-hidden="true"></i> Follow</button>
      </div>
    )
  }

}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { requestSingleArticle }
)(Article)