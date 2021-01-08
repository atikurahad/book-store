import React, { Component } from "react";
import Logo from '../assets/logo.webp'
class HeaderLogo extends Component {
  state = {};
  render() {
    return (
      <div className="header-logo">
        <a href='/book'>
            <img src={Logo} alt=""/>
        </a>
      </div>
    );
  }
}

export default HeaderLogo;
