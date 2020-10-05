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
  Image,
  Jumbotron,
} from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPeopleFill, BsChatDotsFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import LandingPageCss from "./Landingpage.css";

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
        <OurNavbar isNavAuths={false} />
        <div>
          {/* <h1 id="vision">Vision</h1> */}
          {/* <div className="jumbotron">
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </div> */}
          <div>
            <Carousel className="carouselDiv">
              <Carousel.Item className="min-vh-100">
                <img
                  className="d-block w-100"
                  src={"/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg"}
                  alt="First slide"
                  // width={500}
                  // height={500}
                />
                <Carousel.Caption>
                  <h1>First slide label</h1>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/boat.jpg"
                  alt="Second slide"
                  // width={120}
                  // height={120}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/daniel-born-IrF6_J-2098-unsplash.jpg"
                  alt="Third slide"

                  // width={120}
                  // height={120}
                />

                <Carousel.Caption className="mb-5 pb-10">
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div>
          <h1 className="text-center mt-5 mb-3" id="features">
            Features
          </h1>

          <div className="tasks ">
            <Container>
              <Row md={4} className="mt-5 mb-5">
                <Col>
                  <h2>Take on challenges</h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem fuga accusamus est eveniet rem quis illum
                  accusantium incidunt assumenda fugit nesciunt quos error at,
                  alias esse eaque? Eos, iure maxime?
                </Col>

                <Col xs={3}>
                  <Image src="/images/imagesSVG/undraw_To_do_list_re_9nt7.svg" />
                </Col>
              </Row>
              <Row md={4}>
                <Col>
                  <h2>Work Remotely </h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem fuga accusamus est eveniet rem quis illum
                  accusantium incidunt assumenda fugit nesciunt quos error at,
                  alias esse eaque? Eos, iure maxime?
                </Col>

                <Col xs={3}>
                  <Image src="/images/imagesSVG/undraw_Freelancer_re_irh4.svg" />
                </Col>
              </Row>
              <Row md={4}>
                <Col>
                  <h2>Set up interviews </h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem fuga accusamus est eveniet rem quis illum
                  accusantium incidunt assumenda fugit nesciunt quos error at,
                  alias esse eaque? Eos, iure maxime?
                </Col>

                <Col xs={3}>
                  <Image src="/images/imagesSVG/undraw_group_video_el8e.svg" />
                </Col>
              </Row>
              <Row md={4}>
                <Col>
                  <h2> New job postings</h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem fuga accusamus est eveniet rem quis illum
                  accusantium incidunt assumenda fugit nesciunt quos error at,
                  alias esse eaque? Eos, iure maxime?
                </Col>

                <Col xs={3}>
                  <Image src="/images/imagesSVG/undraw_Done_checking_re_6vyx.svg" />
                </Col>
              </Row>
            </Container>
          </div>
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
          <h1 className="text-center mt-5 mb-3" id="team">
            Meet Our Team <BsFillPeopleFill />
          </h1>
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/images/tolga.jpeg" />
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
              <Card.Img
                variant="top"
                src="/images/IH-AUG2020_Sophia.jpg"
                roundedCircle
              />
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
              <Card.Img variant="top" src="/images/unnamed.jpg" roundedCircle />
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
          <h1 className="text-center mt-5 mb-3" id="faq">
            FAQ
          </h1>
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
          <h1 className="text-center mt-5 mb-3" id="contactus">
            Contact Us
          </h1>
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
