import React, { Component } from "react";
import { Route } from "react-router";

import UserService from "../services/user.service";
import RoomDetails from "./RoomDetails";
import StaffDetails from "./StaffDetails";

export default class BoardOwner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getOwnerBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Route path="/owner/departmentdetails" component={StaffDetails}/>
        <Route path="/owner/roomdetails" component={RoomDetails}/>
      </div>
    );
  }
}
