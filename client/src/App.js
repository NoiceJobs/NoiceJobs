import React, { Component } from "react";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Landingpage from "./pages/landingpage/Landingpage.jsx";
import Login from "../src/components/login/Login";
import Signup from "../src/components/signup/Signup.js";
import Jobs from "../src/components/jobs/Jobs";

import JobDetails from "./components/jobs/JobDetails";



// import {} from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileContent from "./components/profileContent/ProfileContent";
import CodeEditor from "./pages/codeeditor/CodeEditor";

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
				{/* Check if user is logged in
      Not Logged in this Landingpage component should show */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Landingpage user={this.state.user} {...props} />
            )}
          />

          <Route
            exact
            path="/profile"
            render={(props) => <Profile user={this.state.user} {...props} />}
          />

          <Route
            exact
            path="/signup"
            render={(props) => <Signup setUser={this.setUser} {...props} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => <Login setUser={this.setUser} {...props} />}
          />

          <Route
            exact
            path="/jobs"
            render={(props) => <Jobs user={this.state.user} {...props} />}
          />

          <Route
            exact
            path="/jobs/:id"
            render={(props) => <JobDetails user={this.state.user} {...props} />}
          />
              <Route
						exact
						path='/codeeditor'
						render={(props) => <CodeEditor setUser={this.setUser} {...props} />}
					/>
        </Switch>

        {/* If signed in this profile should show */}
      </div>
    );
  }

}

export default App;

// state = {
// 	user: this.props.user
// }

// setUser = user => {
// 	this.setState({
// 		user: user
// 	});
// }

// function App() {
// 	return (
// 		<div className='App'>
// 			{/* Check if user is logged in
//       Not Logged in this Landingpage component should show */}
// 			<Switch>
// 				<Route exact path='/' component={Landingpage} />
// 				<Route exact path='/profile' component={Profile} />
// 				<Route
//         exact
//         path="/signup"
//         render={props => <Signup setUser={this.setUser} {...props}/>}
//         />

//         <Route
//         exact
//         path="/login"
//         render={props => <Login setUser={this.setUser} {...props}/>}
//         />

// 			</Switch>

// 			{/* If signed in this profile should show */}
// 		</div>
// 	);
// }

// export default App;
