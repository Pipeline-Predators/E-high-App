/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
          </Col>
          <Col lg={4} xs={12}>
            <div className="refrence__links">
              <h4 class="Footer__headers">Reference Links</h4>
              <p>links to other sites for more questions ; </p>
              <ul className="footer__links px-0">
                <li>
                  <a href="http://www.schoolng.com//">SchoolNg.com</a>
                </li>
                <li>
                  <a href="https://ghana5.com/">Ghana5.com</a>
                </li>
                <li>
                  <a href="https://myschool.ng/classroom/english-language?exam_type=waec&exam_year=2018&page=8">
                    Myschool.co
                  </a>
                </li>
              </ul>
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
