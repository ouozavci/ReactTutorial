import React, { Component } from "react";

export default class AddUser extends Component {
  render() {
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header">
            <h5>Add User Form</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Enter department"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary</label>
                <input
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder="Enter salary"
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-danger btn-block" type="submit">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
