import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestTopics } from '../reducers/topics/actions';

import Topic from './topic-item';

class Topics extends Component {
  componentDidMount() {
    this.props.requestTopics();
  }

  render() {
    const { topics, subscriptions } = this.props;
    return (
      <div className="topics-home">
        <div className="subscribed-topics">
          {subscriptions.map(topic => <p style={{ flex: '1' }} key={topic.id}>{topic.name}</p>)}
        </div>
        <div className="topics-list">
          {topics.map(data => <Topic key={data.id} data={data} />)}
        </div>
        <button type="button" className="btn">
          <Link to="/">Done</Link>
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    topics: state.topics,
    subscriptions: state.subscriptions,
  }),
  { requestTopics },
)(Topics);

a;
