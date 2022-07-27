import React from "react";
import "./Navbar.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OffCanvas from "./OffCanvas/OffCanvas";

export default function Navbar(props) {
  //The code below is to the button a static highlight when clicked

  // const [isActive, setIsActive] = React.useState(false);
  // const handleClick = () => {
  //   setIsActive((prevState) => !prevState);
  // };
  return (
    <nav className="navbar">
      <div className="nav">
        <OffCanvas />

        <Button
          className={"nav-item  me-5"}
          aria-current="page"
          variant="outline-info"
          onClick={props.homeClicked}
        >
          HOME
        </Button>
        <Button
          className={"nav-item nav-link me-5"}
          aria-current="page"
          variant="outline-info"
          onClick={props.leaderboardClicked}
        >
          LEADERBOARD
        </Button>
        <Button
          className="nav-item nav-link me-5"
          aria-current="page"
          variant="outline-info"
          onClick={props.notificationClicked}
        >
          NOTIFICATION
        </Button>
        <Button
          className="nav-item nav-link  "
          variant="outline-info"
          aria-current="page"
          onClick={props.messageClicked}
        >
          MESSAGE
        </Button>

        <div className="nav-item nav-link active " aria-current="page">
          <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1 "
              aria-label="Search"
            />
            <Button variant="outline-info ">Search</Button>
          </Form>
        </div>
      </div>
    </nav>
  );
}
