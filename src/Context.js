import React, { Component } from "react";

const UserContext = React.createContext();
//Provider ve Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Oğuzhan Özavcı",
        salary: "5000",
        department: "Bilişim Teknolojileri",
      },
      {
        id: 2,
        name: "Omar Obayana",
        salary: "2323",
        department: "İnsan Kaynakları",
      },
      {
        id: 3,
        name: "John Krasinski",
        salary: "5300",
        department: "Risk Yönetimi",
      },
      {
        id: 4,
        name: "Philip Gates",
        salary: "15000",
        department: "Bilişim Teknolojileri",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
