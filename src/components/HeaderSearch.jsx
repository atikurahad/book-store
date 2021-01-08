import React, { Component } from "react";

class HeaderSearch extends Component {
  state = {};
  render() {
    return (
      <div className="header-search">
        <form action="/search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by books (ex. ক্রীতদাসের হাসি|"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn" type="submit">
                <i className="ion-ios-search-strong"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default HeaderSearch;
