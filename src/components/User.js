import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../Context";
export default class User extends Component {
  state = { isVisible: false };

  onCLickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    console.log(id);
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    //Destructing
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#002233", color: "white" }
                    : null
                }
              >
                <div
                  className="card-header d-flex justify-content-between"
                  onClick={this.onCLickEvent}
                >
                  <div className="d-inline">{name}</div>
                  <i
                    className="fas fa-user-times"
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <div className="card-text">Departman: {department}</div>
                    <div className="card-text">
                      Maaş: {salary}
                      {salary === User.defaultProps.salary ? "" : " TL"}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};
User.defaultProps = {
  salary: "Bilgi yok",
  department: "Bilgi yok",
};
