import React, { Component } from "react";
import ReactDOM from "react-dom";
import { UnControlled as CodeMirror } from "react-codemirror2";
import TaskBar from "../../components/taskBar/TaskBar";
import TaskDescription from "../../components/taskDescription/TaskDescription";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { logout } from "../../services/auth.js";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import axios from "axios";
require("codemirror/mode/javascript/javascript");

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      code: 'const name = "Example" ',
      challenge: {},
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    const challengeId = window.location.href.split("/").slice(-1)[0];
    axios.get(`/api/challenges/${challengeId}`).then((response) => {
      this.setState({
        challenge: response.data,
      });
    });
  }

  handleChange(newCode) {
    this.setState({ code: newCode });
  }
  getInput() {
    let parameterName = "";
    switch (typeof this.state.challenge.input) {
      case "string":
        parameterName = "exampleString";
        break;
      case "number":
        parameterName = "exampleNum";
        break;
      default:
        parameterName = "exampleObj";
    }
    return `function solveChallenge(${parameterName}) {\n\treturn ${parameterName} \n}\nsolveChallenge(${
      parameterName === "exampleString"
        ? `"${this.state.challenge.input}"`
        : `"${this.state.challenge.input}"`
    })`;
  }

  render() {
    console.log(this.state.challenge);
    const options = {
      lineNumbers: true,
      mode: "javascript",
      matchBrackets: true,
      enableCodeFolding: true,
      enableCodeFormatting: true,
      showFormatButton: true,
      theme: "monokai",
    };
    return (
      <div>
        <OurNavbar isNavAuths={true} />

        <Container fluid className="mt-5">
          <Row className={"mb-5"}>
            <Col xs={4}></Col>
            <Col xs={4} className="text-center">
              <TaskBar />
            </Col>
            <Col xs={4} className="d-flex justify-content-end">
              <Button variant="outline-info">Test</Button>
              <Button variant="info ml-5">Submit</Button>
            </Col>
          </Row>

          <Row>
            <Col xs={5}>
              <TaskDescription challenge={this.state.challenge} />
            </Col>
            <Col xs={7}>
              <CodeMirror
                value={this.getInput()}
                options={{
                  mode: "javascript",
                  theme: "material",
                  lineNumbers: true,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="">Output</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CodeEditor;
