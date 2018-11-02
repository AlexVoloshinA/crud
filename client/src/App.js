import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    persons: [{username: 'Alex'}]
  };

  componentDidMount() {
    axios.get("http://localhost:4000/").then(res => {
      console.log(res);
      
      this.setState({ persons: res.data });
    });
  }

  render() {
    const list = this.state.persons.map(pers => <li>{pers.username}</li>);

    return (
      <div className="App">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default App;
