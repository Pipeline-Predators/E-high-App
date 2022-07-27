import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ChallengeProgress from "./challengeProgress/ChallengeProgress";
import CollapsingAccordion from "./CollapsingAccordion";

import "./offCanvas.css";
import ProfileInfo from "./profilePic/ProfileInfo";

function OffCanvas(props) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarr mb-0 me-5 ">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header className="header" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Where I added the profile a student that logs in */}
                  <ProfileInfo />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="offcanvas-body">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="w-100"
                  >
                    <div className="profile">
                      <ul>
                        <li>Username</li>
                        <li>Email</li>
                      </ul>
                      <NavDropdown.Item>Edit profile</NavDropdown.Item>
                      <NavDropdown.Item>Settings</NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <div onClick={props.takeQuizClicked}>
                    <Nav.Link>Take Quiz</Nav.Link>
                  </div>
                  <Nav.Link>Take A Challenge </Nav.Link>
                  <Nav.Link>
                    <CollapsingAccordion />
                  </Nav.Link>

                  <ChallengeProgress />
                  <div className="log-out">
                    <Nav.Link>LOG-OUT</Nav.Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffCanvas;
