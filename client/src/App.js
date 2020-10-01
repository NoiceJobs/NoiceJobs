import React from "react";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Landingpage from "./pages/landingpage/Landingpage";

import {} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileContent from "./components/profileContent/ProfileContent";

function App() {
  return (
    <div className="App">
      {/* Check if user is logged in
      Not Logged in this Landingpage component should show */}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>

      {/* If signed in this profile should show */}
    </div>
  );
}

export default App;
