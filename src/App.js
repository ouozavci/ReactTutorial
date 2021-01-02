import "./App.css";
import Users from "./components/Users";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Oğuzhan Özavcı",
        salary: 5000,
        department: "Bilişim Teknolojileri",
      },
      {
        id: 2,
        name: "Omar Obayana",
        salary: 2323,
        department: "İnsan Kaynakları",
      },
      {
        id: 3,
        name: "John Krasinski",
        salary: 5300,
        department: "Risk Yönetimi",
      },
      {
        id: 4,
        name: "Philip Gates",
        salary: 15000,
        department: "Bilişim Teknolojileri",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1>User App</h1>
        <hr />
        <Users users={this.state.users} />
      </div>
    );
  }
}
