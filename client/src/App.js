import React, { Component } from "react";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Landingpage from "./pages/landingpage/Landingpage.jsx";
import Login from "../src/components/login/Login";
import Signup from "../src/components/signup/Signup.js";
import Jobs from "../src/components/jobs/Jobs";
import JobDetails from "./components/jobs/JobDetails";

// import {} from "react-bootstrap";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ProfileContent from "./components/profileContent/ProfileContent";
import AddJob from "./components/jobs/AddJob";
import CodeEditor from "./pages/codeeditor/CodeEditor";
import Settings from "./pages/settings/Settings";
import AddChallenges from "./components/challenges/AddChallenges";
import Challenges from "./components/challenges/Challenges";
import ChallengesDetails from "./components/challenges/ChallengesDetails";
import UserView from "./components/userView/UserView";
import CodeInterview from "./pages/codeinterview/CodeInterview";
import JobDetailsApplicant from "./components/jobs/JobDetailsApplicant";
import CodeView from "./components/codeView/CodeView";

class App extends Component {
	state = {
		user: this.props.user,
	};

	setUser = (user) => {
		this.setState({
			user: user,
		});
	};

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => {
							if (!this.state.user) return <Landingpage user={this.state.user} {...props} />;
							else return <Redirect to='/profile' />;
						}}
					/>
					<Route
						exact
						path='/profile'
						render={(props) => {
							if (this.state.user) return <Profile user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/user/details/:id/view'
						render={(props) => {
							if (this.state.user) return <UserView user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/settings'
						render={(props) => <Settings user={this.state.user} type='default' {...props} />}
					/>

					<Route
						exact
						path='/profile/settings/:id'
						render={(props) => <Settings user={this.state.user} type='profile' {...props} />}
					/>

					<Route
						exact
						path='/jobs'
						render={(props) => {
							if (this.state.user) return <Jobs user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/jobs/add'
						render={(props) => {
							if (this.state.user.isCompany === true)
								return <AddJob user={this.state.user} {...props} />;
							else return <Redirect to='/jobs' />;
						}}
					/>

					<Route
						exact
						path='/challenges'
						render={(props) => {
							if (this.state.user) return <Challenges user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/challenges/add'
						render={(props) => {
							if (this.state.user.isCompany === true)
								return <AddChallenges user={this.state.user} {...props} />;
							else return <Redirect to='/jobs' />;
						}}
					/>

					<Route
						exact
						path='/solve/challenge/:jobId/:challengeId'
						render={(props) => {
							if (this.state.user.isCompany === false)
								return <CodeEditor user={this.state.user} {...props} />;
							else return <Redirect to='/profile' />;
						}}
					/>

					<Route
						exact
						path='/view/solved/challenge/:jobId/:challengeId'
						render={(props) => {
							if (this.state.user.isCompany === false)
								return <CodeView user={this.state.user} {...props} />;
							else return <Redirect to='/profile' />;
						}}
					/>

					<Route
						exact
						path='/challenge/:id'
						render={(props) => {
							if (this.state.user.isCompany === true)
								return <ChallengesDetails user={this.state.user} {...props} />;
							else return <Redirect to='/jobs' />;
						}}
					/>

					<Route
						exact
						path='/jobs/:id'
						render={(props) => {
							if (this.state.user.isCompany)
								return <JobDetails user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/jobs/applicant/:id'
						render={(props) => {
							if (!this.state.user.isCompany)
								return <JobDetailsApplicant user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/codeeditor'
						render={(props) => {
							if (this.state.user.isCompany === false)
								return <CodeEditor user={this.state.user} {...props} />;
							else return <Redirect to='/profile' />;
						}}
					/>

					<Route
						exact
						path='/codeinterview'
						render={(props) => {
							if (this.state.user) return <CodeInterview user={this.state.user} {...props} />;
							else return <Redirect to='/' />;
						}}
					/>

					<Route
						exact
						path='/signup'
						render={(props) => <Signup user={this.state.user} setUser={this.setUser} {...props} />}
					/>

					<Route
						exact
						path='/login'
						render={(props) => <Login user={this.state.user} setUser={this.setUser} {...props} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
