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
import { BiMailSend } from "react-icons/all";

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
              <Carousel.Item className="max-vh-70">
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
              <Carousel.Item className="max-vh-70">
                <img
                  className="d-block w-100"
                  src="/images/boat.jpg"
                  alt="Second slide"
                  // width={120}
                  // height={120}
                />
                <Carousel.Caption>
                  <h2>Second slide label</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="max-vh-70">
                <img
                  className="d-block w-100"
                  src="/images/daniel-born-IrF6_J-2098-unsplash.jpg"
                  alt="Third slide"

                  // width={120}
                  // height={120}
                />

                <Carousel.Caption>
                  {/* <Carousel.Caption className="mb-5 pb-10"> */}
                  <h2>Third slide label</h2>
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
              <Card.Img variant="top" src="/images/tolga.jpg" />
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

        <Container className={"mt-5 mb-5"}>
          <form action="" method="POST" onSubmit="return false;">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="frontend-contact-firstname">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="frontend-contact-firstname"
                    name="frontend-contact-firstname"
                    placeholder="Enter your firstname.."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="frontend-contact-lastname">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="frontend-contact-lastname"
                    name="frontend-contact-lastname"
                    placeholder="Enter your lastname.."
                  />
                </div>
              </div>
            </div>
            <div className="form-group" id={"contactus"}>
              <label htmlFor="frontend-contact-email">Email</label>
              <input
                type="email"
                className="form-control"
                id="frontend-contact-email"
                name="frontend-contact-email"
                placeholder="Enter your email.."
              />
            </div>
            <div className="form-group">
              <label htmlFor="frontend-contact-subject">Problem Type</label>
              <select
                className="custom-select"
                id="frontend-contact-subject"
                name="frontend-contact-subject"
                size="1"
              >
                <option value="1">Support</option>
                <option value="2">Billing</option>
                <option value="3">Management</option>
                <option value="4">Feature Request</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="frontend-contact-msg">Message</label>
              <textarea
                className="form-control"
                id="frontend-contact-msg"
                name="frontend-contact-msg"
                rows="7"
                placeholder="Enter your message.."
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">
                <BiMailSend /> Send Message
              </button>
            </div>
          </form>
        </Container>

        <div className={"bg-info text-white w-100 mt-5 pt-5 pb-5"}>
          <Row>
            <Col className="mt-3">
              <h5 className={"font-weight-bold"}>Company</h5>
              <p>Privacy policy</p>
              <p>Terms of use</p>
              <p>Imprint</p>
            </Col>
            <Col className="mt-3">
              <h5 className={"font-weight-bold"}>Resources</h5>
              <p>Support</p>
              <p>Report a Bug</p>
              <p>Blog</p>
            </Col>
            <Col className="mt-3">
              <h5 className={"font-weight-bold"}>Contact</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Linkedin</p>
            </Col>
          </Row>
        </div>

        {/* <Router>

					<Route exact path='/login/' component={Login} />
					<Route exact path='/signup/' component={Signup}  />
				</Router> */}
      </div>
    );
  }
}
