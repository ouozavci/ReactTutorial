import React, { Component } from "react";
import PropTypes from "prop-types";
export default class User extends Component {
  render() {
    //Destructing
    const { name, department, salary } = this.props;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="d-inline">{name}</div>
            <i class="fas fa-user-times"></i>
          </div>
          <div className="card-body">
            <div className="card-text">Departman: {department}</div>
            <div className="card-text">Maaş: {salary}</div>
          </div>
        </div>
      </div>
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
