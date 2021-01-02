import React, { Component } from "react";
import PropTypes from "prop-types";
export default class User extends Component {
  state = { isVisible: false };

  onCLickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    //Destructing
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="d-inline" onClick={this.onCLickEvent}>
              {name}
            </div>
            <i className="fas fa-user-times"></i>
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
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
};
User.defaultProps = {
  salary: "Bilgi yok",
  department: "Bilgi yok",
};
