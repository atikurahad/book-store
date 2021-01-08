import React, { Component } from 'react'
import { Row } from "react-bootstrap";
class Book extends Component {
    state = {  }
    render() { 
        return (
          <Row>
            <div className="book-list-wrapper">
              <a href="/book" title={this.props.title}>
                <div className="book-img">
                  <img
                    src={this.props.bookImg}
                    alt="Swapner Mollica"
                  ></img>
                </div>
                <div className="book-text-area">
                  <p className="book-title">{this.props.title}</p>
                  <p className="book-author">{this.props.author}</p>
                  <p className="book-status text-capitalize"></p>
                  <p className="book-price">
                    <strike className="original-price">TK. {this.props.price}</strike>
                    TK. {this.props.discountPrice}
                  </p>
                </div>
              </a>
            </div>
          </Row>
        );
    }
}
 
export default Book;