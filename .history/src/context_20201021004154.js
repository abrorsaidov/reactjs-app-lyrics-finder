import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "123" } },
    ],
    heading: "Top 10 tracks",
  };
  componentDidMount() {}

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
