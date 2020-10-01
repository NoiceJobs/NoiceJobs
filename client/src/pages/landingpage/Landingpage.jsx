import React, { Component } from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Login from "../../components/login/Login.js";
// import Signup from "../../components/signup/Signup.js";
//import Setting from "../settings/Setting.jsx";

export default class Landingpage extends Component {
	state = {
		fullUserName: "" || "Profile",
	};
	render() {
		return (
			<div>
				<Navbar bg='success' variant='dark'>
					<Navbar.Brand href='/'>NoiceJobs</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#vision' className='font-weight-bold'>
							Vision
						</Nav.Link>
						<Nav.Link href='#features' className='font-weight-bold'>
							Features
						</Nav.Link>
						<Nav.Link href='#team' className='font-weight-bold'>
							Team
						</Nav.Link>
						<Nav.Link href='#faq' className='font-weight-bold'>
							FAQ
						</Nav.Link>
						<Nav.Link href='#contactus' className='font-weight-bold'>
							Contact Us
						</Nav.Link>
						<Nav.Link href='/login' className='font-weight-bold'>
							Login
						</Nav.Link>
					</Nav>
				</Navbar>
				<div>
					<h1 id='vision'>Vision</h1>
				</div>

				<div>
					<h1 id='features'>Features</h1>
				</div>

				<div>
					<h1 id='team'>Team</h1>
				</div>

				<div>
					<h1 id='faq'>FAQ</h1>
				</div>

				<div>
					<h1 id='contactus'>Contact Us</h1>
				</div>

				{/* <Router>

					<Route exact path='/login/' component={Login} />
					<Route exact path='/signup/' component={Signup}  />
				</Router> */}
			</div>
		);
	}
}
