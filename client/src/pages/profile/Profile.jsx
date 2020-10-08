import React, { Component } from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Container } from "react-bootstrap";
import {
	GrNotification,
	MdMessage,
	MdNotifications,
	CgProfile,
	BsBriefcaseFill,
	FiLogOut,
	BiCog,
} from "react-icons/all";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Settings from "../settings/Settings.jsx";
import ProfileContent from "../../components/profileContent/ProfileContent.jsx";
import Blog from "../blog/Blog.jsx";
import JobsList from "../../components/jobsList/JobsList.jsx";
import UserDetails from "../../components/userDetails/UserDetails.jsx";
import CodeEditor from "../codeeditor/CodeEditor.jsx";
import { logout } from "../../services/auth.js";
import OurNavbar from "../../components/ourNavbar/OurNavbar";

const handleLogout = (props) => {
	logout().then(() => {
		props.setUser(null);
	});
};

export default class Profile extends Component {
	state = {
		fullUserName: "" || "Profile",
	};

	render() {
		return (
			<div>
				<OurNavbar
					isNavAuths={true}
					profile={true}
					setting={false}
					challenge={false}
					job={false}
					setUser={this.props.setUser}
					history={this.props.history}
					
				/>
				<ProfileContent user={this.props.user} />
				{/* <Switch>
					<Route
						exact
						path='/profile'
						render={(props) => <ProfileContent user={this.state.user} {...props} />}
					/>
					<Route path='/jobs' component={JobsList} />
					<Route path='/codeeditor/' component={CodeEditor} />
					<Route path='/logout' component={Blog} />
				</Switch> */}
			</div>
		);
	}
}
