import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Book from "./Book";

class BookList extends Component {
 
  render() {
    return (
      <section className="home-book-list-wrapper">
        <section className="home-book-list-section">
          <Row>
            <Col sm={8} className="d-flex align-items-center">
              <h1 className="home-book-list-title">{this.props.title}</h1>
            </Col>
            <Col sm={4}>
              <Button variant="primary">View all</Button>
            </Col>
          </Row>
          {this.props.books.map(book=>{
              return (
                <Book bookImg={book.bookUrl} title={book.title} author={book.author} price={book.price} discountPrice={book.discountPrice} />
              );
          })}
          
          
        </section>
      </section>
    );
  }
}

export default BookList;
