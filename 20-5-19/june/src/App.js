import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// function App(props) {
//   console.log(props);
//   return (

// <div>
// chicken kebab
// <br/>
// hello { props.name }
// </div>
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.name}
        hello Worldistan
      </div>
    );
  }
}
// );
// }

export default App;
