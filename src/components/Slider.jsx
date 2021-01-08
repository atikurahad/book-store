import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Slider extends Component {
  state = {
    images: [
      {
        id: 1,
        title: "Fist slide",
        imageUrl:
          "https://ds.rokomari.store/rokomari110/banner/85a0e2e8-f104-48f1-bc0a-59c28b02fba3.png",
      },
      {
        id: 2,
        title: "Second slide",
        imageUrl:
          "https://ds.rokomari.store/rokomari110/banner/858dd184-a313-4bd8-adbd-dc6b99137e46.png",
      },
      {
        id: 3,
        title: "Third slide",
        imageUrl:
          "https://ds.rokomari.store/rokomari110/banner/c85c371b-9556-4dc7-809b-2ac20e50adf2.jpg",
      },
    ],
  };
  render() {
    return (
      <Carousel>
        {this.state.images.map((image) => {
          return (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={image.imageUrl}
                alt={image.title}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Slider;
