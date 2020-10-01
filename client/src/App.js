// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Landingpage from "./components/landingpage/Landingpage";

import {} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContent from "./components/dashboardContent/DashboardContent";
// import Jobs from "./components/jobslist/JobsList";

function App() {
  return (
    <div className="App">
      {/* Check if user is logged in
      Not Logged in this Landingpage component should show */}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Landingpage />
      {/* If signed in this dashboard should show */}
      <Dashboard />
    </div>
  );
}

export default App;
