import React, { Component } from "react";
import { Route } from "react-router";

import UserService from "../services/user.service";
import InventoryDetails from "./InventoryDetails";
import RoomDetails from "./RoomDetails";
import StaffDetails from "./StaffDetails";

export default class BoardManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getManagerBoard().then(
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

        <Route path="/manager/roomdetails" component={RoomDetails}/>
        <Route path="/manager/staffdetails" component={StaffDetails}/>
        <Route path="/manager/inventorydetails" component={InventoryDetails}/>

      </div>
    );
  }
}
