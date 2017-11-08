import React, { Component } from 'react'
import { connect } from 'react-redux'

import { subscribeTopic, unsubTopic } from '../reducers/subscriptions'

class Topic extends Component {

  componentDidMount() {
    this.props.subscriptions.forEach((topic) => {
      if (topic.name === this.props.data.name) {
        this.setState({
          isSubscribed: true
        })
      }
    })
  }

  state = {
    isSubscribed: false,
  }

  subscribeOnClick = () => {
    this.setState({
      isSubscribed: true
    })
    this.props.subscribeTopic(this.props.data)
  }

  unsubOnClick = () => {
    this.setState({
      isSubscribed: false
    })
    this.props.unsubTopic(this.props.data)
  }

  render () {
    return (
      <div className="topic-container">
        <p className="topic-name">{this.props.data.name}</p>
        {!this.state.isSubscribed ? (
          <button type="button" className="topic-follow" onClick={this.subscribeOnClick}>
            <i className="fa fa-plus" aria-hidden="true"> Follow</i>
          </button>
        ) : (
          <button type="button" className="topic-unfollow" onClick={this.unsubOnClick}>
            <i className="fa fa-times" aria-hidden="true"> Unfollow</i>
          </button>
        )}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    subscriptions: state.subscriptions
  }),
  { subscribeTopic, unsubTopic }
)(Topic)
