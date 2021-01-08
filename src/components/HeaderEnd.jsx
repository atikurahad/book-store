import React, { Component, Fragment } from 'react'
import {Button} from 'react-bootstrap'
class HeaderEnd extends Component {
    state = {  }
    render() { 
        return (
          <Fragment>
            <div className="header-end">
              <div className="cart-menu-wrapper"></div>
            </div>
            <div className="dropdown user-menu">
              <a href="/signin" className="logged-out-user-menu-btn">
                <Button variant="outline-primary">signin</Button>
              </a>
            </div>
          </Fragment>
        );
    }
}
 
export default HeaderEnd;