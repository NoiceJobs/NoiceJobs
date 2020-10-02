import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../../services/auth';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    isCompany: false,
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleCheckboxChange = event => {
    console.log('I am checked', event.target.checked)
    this.setState({ isCompany: event.target.checked })
  }
    


  handleSubmit = event => {
    event.preventDefault();
    const { username, password, isCompany } = this.state;
    signup(username, password, isCompany)
      .then(data => {
        if (data.message) {
          this.setState({
            message: data.message,
            username: '',
            password: '', 
            isCompany: false
          })
        } else {
          // now we need to put the user in the user key of the state of App.js
          this.props.setUser(data);
          // redirect to /?
          this.props.history.push('/profile');
        }

      })
  }

  render() {
    return (
      <>
        <h2>Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
              type="checkbox" 
              name="isCompany"
              label="I am a company" 
              checked={this.state.isCompany}
              onChange={this.handleCheckboxChange}
              />
          </Form.Group>


          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <Button type='submit'>Signup</Button>
        </Form>
      </>
    )
  }
}