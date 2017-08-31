import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.getSearchWord = this.getSearchWord.bind(this)
  }

  getSearchWord(e) {
    this.props.handleChange(e.target.value)
  }
  render() {
    return (
      <div className="searchbar">
        <form>
          <input
            onChange={this.getSearchWord}
            id="searchBox"
            type="text"
            placeholder="Search contact..."
          />
        </form>
      </div>
    );
  }
}
