import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import AboutPage from "./components/layout/AboutPage";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Search from "./components/tracks/Search";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment className="App">
            <Navbar />
            <Search />
            <About />
            <div className="container-mine container">
              <Switch>
                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
