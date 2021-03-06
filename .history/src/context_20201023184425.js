import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "WAIT_LYRICS":
      return {
        ...state,
        track_list: [],
      };
    case "SEARCH_TRACKS":
      if (action.payload.header.available === 0) {
        return {
          ...state,
          heading: "Search Results",
          notfound: true,
          track_list: [],
        };
      } else {
        return {
          ...state,
          track_list: action.payload.body.track_list,
          heading: "Search Results",
          found: true,
        };
      }
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 tracks",
    notfound: null,
    found: null,
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        //console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
