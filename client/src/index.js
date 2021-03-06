import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript.js');

axios.get("/api/auth/loggedin").then((response) => {
	const user = response.data;
	ReactDOM.render(
		<BrowserRouter>
			<App user={user} />
		</BrowserRouter>,
		document.getElementById("root")
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
