import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BiCog,
  BsBriefcaseFill,
  CgProfile,
  FiLogOut,
  RiSwordLine,
} from "react-icons/all";
import { logout } from "../../services/auth";
import Branding from "../images/NJ_1.png";

class OurNavbar extends Component {
  render() {
    const handleLogout = (props) => {
      logout().then(() => {
        props.setUser(null);
      });
    };
    return (
      <div>
        {this.props.isNavAuths ? (
          <Navbar bg="info" variant="dark">
            <Navbar.Brand href="/profile/" className="border p-2">
              <img
                alt=""
                src={Branding}
                width="20"
                height="20"
                className="d-inline-block align-center mb-1"
              />{" "}
              NoiceJobs
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link
                href="/profile"
                className={`${
                  this.props.profile ? "active" : ""
                } font-weight-bold h5`}
              >
                <CgProfile className="mr-1" />
                Profile
              </Nav.Link>
              <Nav.Link
                href="/settings"
                className={`${
                  this.props.setting ? "active" : ""
                } font-weight-bold h5`}
              >
                <BiCog className="mr-1" />
                Settings
              </Nav.Link>
              <Nav.Link
                href="/jobs"
                className={`${
                  this.props.job ? "active" : ""
                } font-weight-bold h5`}
              >
                <BsBriefcaseFill className="mr-1" /> Jobs{" "}
              </Nav.Link>
              <Nav.Link
                href="/challenges"
                className={`${
                  this.props.challenge ? "active" : ""
                } font-weight-bold h5`}
              >
                <RiSwordLine className="mr-1" /> Challenges{" "}
              </Nav.Link>
              <Nav.Link
                href="/"
                onClick={() => handleLogout(this.props)}
                className="font-weight-bold btn btn-light text-danger shadow-sm ml-4 h5"
              >
                <FiLogOut /> Logout
              </Nav.Link>
            </Nav>
          </Navbar>
        ) : (
          <Navbar bg="info" variant="dark">
            <Navbar.Brand href="/profile/" className="border p-2">
              <img
                alt=""
                src={Branding}
                width="20"
                height="20"
                className="d-inline-block align-center mb-1"
              />{" "}
              NoiceJobs
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#vision" className="font-weight-bold">
                Vision
              </Nav.Link>
              <Nav.Link href="#features" className="font-weight-bold">
                Features
              </Nav.Link>
              <Nav.Link href="#team" className="font-weight-bold">
                Team
              </Nav.Link>
              <Nav.Link href="#contactus" className="font-weight-bold">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/login" className="font-weight-bold">
                Login
              </Nav.Link>
            </Nav>
          </Navbar>
        )}
      </div>
    );
  }
}

export default OurNavbar;
