import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
  Col,
  Row,
  Card,
  Button,
  ListGroup,
  Carousel,
  CardDeck,
} from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPeopleFill, BsChatDotsFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
// import Login from "../../components/login/Login.js";
// import Signup from "../../components/signup/Signup.js";
//import Setting from "../settings/Setting.jsx";

export default class Landingpage extends Component {
  state = {
    fullUserName: "" || "Profile",
  };
  render() {
    return (
      <div>
        <OurNavbar isNavAuths={false}/>
        <div>
          <h1 id="vision">Vision</h1>
        </div>

        <div>
          <h1 id="features">Features</h1>
          <Card>
            <Card.Header as="h5">Cool Functions</Card.Header>
            <Card.Body>
              <Card.Title>What our website can offer you</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Sign up here</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/tyler-franta-iusJ25iYu1c-unsplash.jpg"
                alt="First slide"
                // width={120}
                // height={120}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/simon-abrams-k_T9Zj3SE8k-unsplash.jpg"
                alt="Third slide"
                // width={120}
                // height={120}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/bethany-legg-75nbwHfDsnY-unsplash.jpg"
                alt="Third slide"
                // width={120}
                // height={120}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* <div>
          <h1 id="team">
            Meet Our Team <BsFillPeopleFill />
          </h1>
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/elephant.jpeg" />
            <Card.Body>
              <Card.Title>Tolga</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/elephant.jpeg" />
            <Card.Body>
              <Card.Title>Sophia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/elephant.jpeg" />
            <Card.Body>
              <Card.Title>Esther</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
        <div>
          <h1 id="team">
            Meet Our Team <BsFillPeopleFill />
          </h1>
          <CardDeck>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/elephant.jpeg" />
              <Card.Body>
                <Card.Title>Tolga</Card.Title>
                <Card.Text>
                  Developer This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/elephant.jpeg" />
              <Card.Body>
                <Card.Title>Sophia</Card.Title>
                <Card.Text>
                  Developer This card has supporting text below as a natural
                  lead-in to additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/elephant.jpeg" />
              <Card.Body>
                <Card.Title>Esther</Card.Title>
                <Card.Text>
                  Developer This is a wider card with supporting text below as a
                  natural lead-in to additional content. This card has even
                  longer content than the first to show that equal height
                  action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>

        <div>
          <h1 id="faq">FAQ</h1>
          <Card>
            <Card.Header as="h5">Any Questions?</Card.Header>
            <Card.Body>
              <Card.Title>What our website can offer you</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Sign up here</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h1 id="contactus">Contact Us</h1>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Contact Us</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                LinkedIn <FaLinkedin />
              </ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        {/* <Router>

					<Route exact path='/login/' component={Login} />
					<Route exact path='/signup/' component={Signup}  />
				</Router> */}
      </div>
    );
  }
}
