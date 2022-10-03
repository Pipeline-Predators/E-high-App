/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";
import whatsappLogo from "../../assets/logo/whatsapplogo.png";
import twitterLogo from "../../assets/logo/twitterlogo.png";
import instagramLogo from "../../assets/logo/instagramlogo.png";
import facebookLogo from "../../assets/logo/face.jpg";

function Footer() {
  return (
    <footer className="footer px-0">
      <Container>
        <Row className="mx-0">
          <Col lg={4} xs={12}>
            {/* <h4 class="Footer__headers">Nav Links</h4> */}
            <ul className="footer__links px-0">
              <li>
                <a href="LEADERboad.html">Leaderboard</a>
              </li>
              <li>
                <a href="Notification.html">Notification </a>
              </li>
              <li>
                <a href="About.html">About</a>
              </li>
            </ul>
          </Col>
          <Col lg={4} xs={12}>
            <div className="refrence__links">
              <h4 class="Footer__headers">
                Go outside the class to learn more.
              </h4>
              {/* <p>links to other sites for more questions ; </p> */}
              <ul className="footer__links px-0">
                <li>
                  <a href="https://www.curiositymachine.org/">
                    Curiosity Machine
                  </a>
                </li>
                <li>
                  <a href="https://www.exploratorium.edu/">Exploration</a>
                </li>
                <li>
                  <a href="https://www.sciencekids.co.nz/">sciencekids</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <div className="social__mediaHandles">
              <h4 class="Footer__headers">Contact Us</h4>
              <p>
                <a href="mailto:pipelinepredators2022@gmail.com?subject=Hello! E-High Developers">
                  pipelinepredators2022@gmail.com
                </a>
              </p>
              <p className="medias">
                <a href="https://www.instagram.com">
                  <img className="media__icons" src={instagramLogo} alt="" />
                </a>

                <a href="https://www.facebook.com">
                  <img className="media__icons" src={facebookLogo} alt="" />
                </a>

                <a href="https://twitter.com">
                  <img className="media__icons" src={twitterLogo} alt="" />
                </a>

                <a
                  href="https://www.whatsapp.com"
                >
                  <img className="media__icons" src={whatsappLogo} alt="" />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div class="footer__copyright">
        <small>Copyright &copy; PIPELINE PREDATORS 2022.</small>
      </div>
    </footer>
  );
}

export default Footer;
