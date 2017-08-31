import React, { Component } from "react";
import axios from "axios";

import Contact from "./Contact";
import Search from "./Search";

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: undefined,
      searchword: "",
      filtered: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(searchword) {
    this.setState({ searchword: searchword }, () => {

      let word = this.state.contacts.filter(
        contact =>
          contact.name.first
            .toLowerCase()
            .indexOf(this.state.searchword.toLowerCase()) > -1 ||
          contact.name.last
            .toLowerCase()
            .indexOf(this.state.searchword.toLowerCase()) > -1
      );
      this.setState(
        {
          filtered: [...word],
        });
    });
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then(response => {
        this.setState({
          contacts: response.data.results,
          filtered: response.data.results,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="contact-app">
        <div className="contact-app-card">
          {this.state.contacts !== undefined ? (
            <Search
              handleChange={this.handleChange}
              searchword={this.state.searchword}
            />
          ) : null}
          <ul>
            {/* {this.state.contacts !== undefined ? (
              
            ) : null} */}
            <Contact contacts={this.state.filtered} />
          </ul>
        </div>
      </div>
    );
  }
}
