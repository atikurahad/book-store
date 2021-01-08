import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Navigation extends Component {
  state = {
    books: [
      {
        id: 1,
        imgPath:
          "https://ds.rokomari.store/rokomari110/banner/2307e185-6c2d-4f75-9ac8-5b4e723104fb.png",
      },
      {
        id: 2,
        imgPath:
          "https://ds.rokomari.store/rokomari110/banner/2ecc3814-9e6b-4a9a-a297-2fda51848c9d.png",
      },
      {
        id: 3,
        imgPath:
          "https://ds.rokomari.store/rokomari110/banner/3152be0e-94e4-4c66-8204-a283c2e221f1.png",
      },
    ],
  };
  render() {
    return (
      <section className="navigation-area">
        <div className="small-banner d-flex justify-content-between">
          {this.state.books.map((book) => {
            return (
              <a href="/books" key={book.id}>
                <Image src={book.imgPath} fluid />
              </a>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Navigation;
