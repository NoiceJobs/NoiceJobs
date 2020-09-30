import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SettingsPage from "../settingsPage/SettingsPage.jsx";

export default class Landingpage extends Component {
  state = {
    fullUserName: "" || "Profile",
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/dashboard/:id" style={{ "margin-left": "5rem" }}>
            NoiceJobs
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/blog">Blog</Nav.Link>
            <DropdownButton
              alignRight
              id="dropdown-item-button"
              title={this.state.fullUserName}
              variant="dark"
            >
              <Dropdown.Item href="/profile/:id" as="button">
                My Profile
              </Dropdown.Item>
              <Dropdown.Item href="/messages/:id" as="button">
                Inbox
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/logout" as="button">
                <span className="text-danger font-weight-bold">Sign Out</span>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar>
        <Sidebar />
        <Switch>
          <Route path="/settings/:id" component={SettingsPage} />
        </Switch>
        ),
      </div>
    );
  }
}
