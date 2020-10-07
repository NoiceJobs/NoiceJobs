import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { RiMailSendFill } from "react-icons/all";

const CodeInterview = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={"join-outer-container"}>
      <div className={"join-inner-container"}>
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder={"Name"}
            className={"join-input"}
            type={"text"}
            onChange={() => ""}
          />
        </div>
        <div>
          <input
            placeholder={"Room"}
            className={"join-input mt-20"}
            type={"text"}
            onChange={() => ""}
          />
        </div>
        <Link>
          <button className={"button mt-20"} type={"submit"}>
            Join Interview !!!
          </button>
        </Link>
      </div>
    </div>
  );

  /*<div>
		<OurNavbar isNavAuths={true} />
		{/!*{this.state.isVerifiedRoom ? 'Hallo' : 'Du kannst hier net rein'}*!/}
		<Container>
			<Card className="text-center">
				<Card.Header className={'bg-info text-white font-weight-bold'}>Chatroom  <span className={'float-right'}>{this.props.user.name || this.props.user.username}</span></Card.Header>
				<Card.Body>
					<ul className="media-list chatbody"></ul>
				</Card.Body>
				<Card.Footer className="text-muted bg-info">
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Message"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
						<InputGroup.Append>
							<Button variant="info" onClick={this.sendmessage}><RiMailSendFill /> Send Message</Button>
						</InputGroup.Append>
					</InputGroup>
				</Card.Footer>
			</Card>
		</Container>
	</div>*/
};

export default CodeInterview;
