import React, { Component } from "react";
import OurNavbar from "../ourNavbar/OurNavbar";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { UnControlled as CodeMirror } from "react-codemirror2";

class ChallengesDetails extends Component {
  state = {
    challenge: {},
  };

  getChallenge() {
    const id = this.props.match.params.id;
    axios
      .get(`/api/challenges/${id}`)
      .then((response) => {
        this.setState({
          challenge: response.data,
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            error: "Not found",
          });
        }
      });
  }

  componentDidMount() {
    this.getChallenge();
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
    }
    return `function solveChallenge(${parameterName}) {\n\treturn ${parameterName} \n}\nsolveChallenge(${
      parameterName === "exampleString"
        ? `"${this.state.challenge.input}"`
        : `"${this.state.challenge.input}"`
    })`;
  }
  getOutput() {
    let parameterValue = "";
    let returnVal = "";
    switch (typeof this.state.challenge.input) {
      case "string":
        parameterValue = `"${this.state.challenge.input}"`;
        break;
      case "number":
        parameterValue = `${this.state.challenge.input}`;
        break;
    }
    switch (typeof this.state.challenge.output) {
      case "string":
        returnVal = `"${this.state.challenge.output}"`;
        break;
      case "number":
        returnVal = `${this.state.challenge.output}`;
        break;
    }
    return `solveChallenge(${parameterValue}) \t \/\/ ${returnVal}`;
  }

  render() {
    console.log(this.state.challenge);

    return (
      <div>
        <OurNavbar
          isNavAuths={true}
          profile={false}
          setting={false}
          challenge={true}
          job={false}
        />

        <Container className={"mt-5"}>
          <h1 className={"text-info"}>{this.state.challenge.title}</h1>
          <h5 className={""}>
            <span className="text-info font-weight-bold">Description:</span>{" "}
            {this.state.challenge.description}
          </h5>
          <Row>
            <Col xs={6}>
              <p className="text-info font-weight-bold">Input:</p>
              <CodeMirror
                value={this.getInput()}
                options={{
                  mode: "javascript",
                  theme: "material",
                  lineNumbers: true,
                }}
              />
            </Col>
            <Col xs={6}>
              <p className="text-info font-weight-bold">Output:</p>
              <CodeMirror
                value={this.getOutput()}
                options={{
                  mode: "javascript",
                  theme: "material",
                  lineNumbers: true,
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChallengesDetails;
