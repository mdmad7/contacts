import React, { Component } from "react";
import axios from "axios";

import Contact from "./Contact";

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: undefined,
    };
  }
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then(response => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="contact-app">
        <div className="row">
          <div className="col-12">
            <h1>Contact App List</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul>
              {this.state.contacts !== undefined ? (
                <Contact contacts={this.state.contacts} />
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
