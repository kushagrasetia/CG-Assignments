import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardReceptionist from "./components/board-receptionist.component";
import BoardManager from "./components/board-manager.component";
import BoardOwner from "./components/board-owner.component";
import About from "./components/About";
import Contact from "./components/Contact";
import logo from './Images/logo.png';
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showManagerBoard: false,
      showOwnerBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showManagerBoard: user.roles.includes("ROLE_MANAGER"),
        showOwnerBoard: user.roles.includes("ROLE_OWNER"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showManagerBoard, showOwnerBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand">
          <NavLink to={"/"} className="navbar-brand">
          <img src={logo} alt="logo_pic"></img>
            <span>Hotel <span className="logo">Grand</span></span>
          </NavLink>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/home"} className="nav-link">
                Home
              </NavLink>
            </li>

            {showManagerBoard && (
              <>
              <li className="nav-item">
                <NavLink to={"/manager/roomdetails"} className="nav-link">
                  Room Details
                </NavLink>
              </li>
                <li className="nav-item">
                <NavLink to={"/manager/staffdetails"} className="nav-link">
                  Staff Details
                </NavLink>
              </li>
                <li className="nav-item">
                <NavLink to={"/manager/inventorydetails"} className="nav-link">
                  Inventory Details
                </NavLink>
              </li>
              </>
            )}

            {showOwnerBoard && (
              <>
              <li className="nav-item">
                <NavLink to={"/owner/departmentdetails"} className="nav-link">
                  Department Details
                </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={"/owner/roomdetails"} className="nav-link">
                  Room Details
                </NavLink>
              </li>
              </>
            )}

            {currentUser && (
              <>
              <li className="nav-item">
                <NavLink to={"/receptionist/guestdetails"} className="nav-link">
                  Guest Details
                </NavLink>
              </li>
                  <li className="nav-item">
                <NavLink to={"/receptionist/reservation"} className="nav-link">
                  Make Reservation
                </NavLink>
              </li>
              </>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/profile"} className="nav-link">
                  {currentUser.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </NavLink>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
                <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/receptionist" component={BoardReceptionist} />
            <Route path="/manager" component={BoardManager} />
            <Route path="/owner" component={BoardOwner} />
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;