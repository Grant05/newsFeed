import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class ArticlePage extends Component {
  render() {
    const { articles } = this.props;
    const article = articles[0];
    const body = article.body.replace(/<p>|<\/p>/g, '');
    console.log('single article: ', article);
    return (
      <div className="single-article">
        <div className="main-article">
          <h2 className="article-sh">{article.title}</h2>
          <div className="article-sh-container">
            <h4 className="article-org">{article.attribution.displayName.toUpperCase()}</h4>
            <p className="article-date">{moment(article.createdAt).format('MMM-DD-YYYY')}</p>
          </div>
          <img className="article-picture" src={article.media[0].url} />
          <p className="article-p">{body}</p>
          <a href={article.url}>Source</a>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  articles: state.articles,
}))(ArticlePage);
