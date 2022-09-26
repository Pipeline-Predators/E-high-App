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
import "./Footer.css";

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
          <Col lg={3} xs={12}>
            <h4 class="Footer__headers">E-HIGH Developers.</h4>
            <h6>Contact Developers:</h6>
            <div className="mails">
              <br />

              <a href="mailto:asensoboadi814@gmail.com">David Asenso-Boadi</a>

              <br />

              <a href="mailto:adorsoomaxwell186@gmail.com">Maxwell Adorsoo</a>

              <br />

              <a href="mailto:knanamichael25@gmail.com">Michael Osei</a>

              <br />
              <a href="mailto:perrilconics5@gmail.com">David Asalya</a>

              <br />
              <a href="mailto:pahaamalinda@gmail.com">Linda Ama Paha</a>

              <br />

              <a href="mailto:akanlegumjohn2@gmail.com">John Akanlegum</a>

              <br />
              <a href="mailto:amissahadwobiah2002@gmail.com">
                Adwobiah Amissah
              </a>

              <br />
              <a href="mailto:viewumichael@gmail.com"> Michael Viewu Bambino</a>

              <br />
              <a href="mailto:kweku4sta@gmail.com">Ansah Foster</a>
            </div>
          </Col>

          <Col lg={3} xs={12}>
            <h4 class="Footer__headers">Nav Links</h4>

            <ul className="footer__links px-0">
              <li>
                <a href="LEADERboad.html">Leaderboard</a>
              </li>
              <li>
                <a href="Notification.html">Notification </a>
              </li>
              <li>
                <a href="Messages.html">Messages</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} xs={12}>
            <div className="social__mediaHandles">
              <h4 class="Footer__headers">Social Media Handles</h4>
              <p className="medias">
                <a href="####">
                  {" "}
                  <img className="media__icons" src={instagramLogo} alt="" />
                  Instagram{" "}
                </a>
                <br />
                <a href="###">
                  {" "}
                  <img className="media__icons" src={facebookLogo} alt="" />
                  Facebook
                </a>
                <br />
                <a href="####">
                  {" "}
                  <img className="media__icons" src={twitterLogo} alt="" />
                  Twitter
                </a>
                <br />
                <a href="####">
                  {" "}
                  <img className="media__icons" src={whatsappLogo} alt="" />
                  whatsapp
                </a>
                <br />
              </p>
            </div>
          </Col>
          <Col lg={3} xs={12}>
            <div className="refrence__links">
              <h4 class="Footer__headers">Reference Links</h4>
              <p>links of other site for more questions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
