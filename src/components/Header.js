import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {

  render() {
    return(
      <header className="header">
        <h2 className="header-title">
          <Link to="/"
            className="header-title">
            Final Grudge List
          </Link>
        </h2>
      </header>
    )
  }
}

export default Header;
