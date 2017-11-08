import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"

class Header extends Component {
  render () {
    return (
      <div id='nav-bar'>
        <button type="button" className="nav-btn"><Link to="/" className="nav-link">Home</Link></button>
        <button type="button" className="nav-btn"><Link to="/topics" className="nav-link">Topics</Link></button>
      </div>
    )
  }
}

export default Header
