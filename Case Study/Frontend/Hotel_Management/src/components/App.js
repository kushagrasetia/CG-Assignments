import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
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
            HOTEL GRAND
          </NavLink>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showManagerBoard && (
              <>
              <li className="nav-item">
                <Link to={"/manager"} className="nav-link">
                  Room Details
                </Link>
              </li>
                <li className="nav-item">
                <Link to={"/manager"} className="nav-link">
                  Staff Details
                </Link>
              </li>
                <li className="nav-item">
                <Link to={"/manager"} className="nav-link">
                  Inventory Details
                </Link>
              </li>
              </>
            )}

            {showOwnerBoard && (
              <li className="nav-item">
                <Link to={"/owner"} className="nav-link">
                  Owner Board
                </Link>
              </li>
            )}

            {currentUser && (
              <>
              <li className="nav-item">
                <Link to={"/receptionist"} className="nav-link">
                  receptionist
                </Link>
              </li>
              </>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
                <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
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
        </div>
      </div>
    );
  }
}

export default App;