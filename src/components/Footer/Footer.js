/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";
import whatsappLogo from "../../assets/logo/whatsapplogo.png";
import twitterLogo from "../../assets/logo/twitterlogo.png";
import instagramLogo from "../../assets/logo/instagramlogo.png";
import facebookLogo from "../../assets/logo/face.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer px-0">
      <Container>
        <Row className="mx-0">
          <Col lg={4} xs={12}>
            {/* <h4 class="Footer__headers">Nav Links</h4> */}
            <ul className="footer__links px-0">
              <li>
                <Link to="./" />
              </li>
              <li>
                <a href="LEADERboad.html">Leaderboard</a>
              </li>
              <li>
                <Link to="/" />
              </li>
            </ul>
          </Col>
          <Col lg={4} xs={12}></Col>
          <Col lg={4} xs={12}>
            <div className="refrence__links">
              <h4 class="Footer__headers">Go outside the classroom</h4>
              {/* <p>links to other sites for more questions ; </p> */}
              <ul className="footer__links px-0">
                <li>
                  <a href="https://www.sciencekids.co.nz/">Sciencekids</a>
                </li>
                <li>
                  <a href="https://www.exploratorium.edu/">Exploratorium</a>
                </li>
                <li>
                  <a href="https://www.curiositymachine.org/">
                    Curious Machine
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="social__mediaHandles">
        {/* <h4 class="Footer__headers">Social Media Handles</h4> */}
        <p className="medias">
          <a href="####">
            <img className="media__icons" src={instagramLogo} alt="" />
          </a>

          <a href="###">
            <img className="media__icons" src={facebookLogo} alt="" />
          </a>

          <a href="####">
            <img className="media__icons" src={twitterLogo} alt="" />
          </a>

          <a href="####">
            <img className="media__icons" src={whatsappLogo} alt="" />
          </a>
        </p>
      </div>
      <div class="footer__copyright">
        <small>Copyright &copy; PIPELINE PREDATORS 2022.</small>
      </div>
    </footer>
  );
}

export default Footer;
