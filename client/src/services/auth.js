// src/services/auth.js

import axios from 'axios';

const signup = ( username, password, isCompany) => {
  return axios
    .post('/api/auth/signup', { username, password, isCompany })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data
    });
}

const login = (username, password) => {
  return axios
    .post('/api/auth/login', { username, password})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data
    });
}

const logout = (username, password) => {
  return axios
    .delete('/api/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data
    });
}

// const loginGitHub = () => {
//   console.log('client auth.js');
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "/api/auth/github", true);
//   xhttp.send();
// };

export { signup, login, logout};