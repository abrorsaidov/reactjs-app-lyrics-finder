import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  stare = {
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "123" } },
    ],
    heading: "Top 10 tracks",
  };

  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
