import React, { Component } from "react";
import { Route, Switch } from "react-router";

import UserService from "../services/user.service";
import GuestDetails from "./GuestDetails";
import MakeReservation from "./MakeReservation";

export default class BoardReceptionist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getReceptionistBoard().then(
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
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}

        <Switch>
        <Route path="/receptionist/guestdetails" component={GuestDetails}/>
        <Route path="/receptionist/reservation" component={MakeReservation}/>
        </Switch>

      </div>
    );
  }
}
