import React, { Component, Fragment } from "react";
import BookList from "../components/BookList";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import SubMenu from "../components/SubMenu";

class Home extends Component {
  state = {
    books1: [
      {
        id: 1,
        title: "স্বপ্নের মল্লিকা",
        bookUrl:
          "https://s3-ap-southeast-1.amazonaws.com/rokomari110/ProductNew20190903/130X186/rokimg_20150204_93720.gif",
        author: "মিলি সুলতানা",
        price: 250,
        discountPrice: 140,
      },
      {
        id: 2,
        title: "ভাষা শিক্ষা ও ভাষাবিজ্ঞান পরিচিত",
        bookUrl:
          "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/d41cf9137_194084.jpg",
        author: "হুমায়ুন আজাদ",
        price: 350,
        discountPrice: 144,
      },
      {
        id: 3,
        title: "ক্যাপ্টেন কিউরিয়াস",
        bookUrl:
          "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/d00f5e8c8_2157.jpg",
        author: "Captain",
        price: 550,
        discountPrice: 240,
      },
    ],
    books2: [
      {
        id: 3,
        title: "ক্যাপ্টেন কিউরিয়াস",
        bookUrl:
          "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/29e59fbf4_195887.jpg",
        author: "Captain",
        price: 155,
        discountPrice: 70,
      },
    ],
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <SubMenu />
        <Slider />
        <Navigation />
        <BookList
          books={this.state.books1}
          title={"আগামী প্রকাশনীর বইয়ে সর্বোচ্চ ৩০% ছাড়"}
        />
        <BookList books={this.state.books2} title={"প্রি-অর্ডারে থাকা বই"} />
      </Fragment>
    );
  }
}

export default Home;
