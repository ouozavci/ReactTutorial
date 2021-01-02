import "./App.css";
import Users from "./components/Users";
import React, { Component } from "react";
import AddUser from "./components/AddUser";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>User App</h1>
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}
