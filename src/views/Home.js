import ArticleComponent from "components/Articles/ArticleComponent";
import React from "react";
import { Row, Col, Button } from "reactstrap";
import Predator from "../assets/logo/logo.png";
import ReviewPascoImg from "../assets/img/waec-logo.jpg";
import TakeQuizImg from "../assets/img/take-quiz.jpg";
import imageThree from "../assets/img/education_one.png";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Home = (props) => {
  const history = useHistory();
  return (
    <Row className="mx-0">
      <Col className="px-0" lg={12} xs={12}>
        {/* The header of the app on desktop view */}
        <div className="header-bg d-none d-lg-flex"></div>
        <div className="header-bg-mobile d-lg-none d-sm-flex"></div>
        <section className="header-content d-flex justify-content-center">
          <div className="w-50 d-none d-lg-flex align-items-center">
            <div className="header-hexagon mr-5">
              <img src={Predator} alt="company logo" />
            </div>
            <div>
              {
                <h2>
                  <Typewriter
                    options={{ loop: true, delay: 300 }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Welcome to E-High-Application")
                        .pauseFor(500)
                        .deleteChars(8)

                        .pauseFor(500)

                        .typeString("<i> Where West African students study</i>")
                        .pauseFor(500)
                        .deleteChars(5)

                        .typeString(
                          '<i> <span style="color: #27ae60;">study</span></i>'
                        )
                        .pauseFor(5000)
                        .start();
                    }}
                  />
                </h2>
              }
              <h5>
                Test your might against some of the toughtest exams in the
                country
              </h5>
              <Button onClick={() => history.push("../subject")}>
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </Col>

      <Col lg={12} xs={12}>
        <ArticleComponent
          cardImage={TakeQuizImg}
          title="Take Quiz"
          url="/subject"
          description="Answer timed randomly selected questions on your preferred high school subject. All questions carry equal marks, and you have a minute per question.
            (ie 5 questions is equivalent to 5 minutes)"
        />
        <hr />
      </Col>

      <Col lg={12} xs={12}>
        <ArticleComponent
          cardImage={ReviewPascoImg}
          title="Review Past Questions"
          url="/review"
          description="Prepare yourself for WASSCE by solving some of our well-curated past questions. Relax and just ace it at your own pace.
          "
        />
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleComponent
          cardImage={imageThree}
          title="Take Challenge"
          url="/challenge"
          description="You got what it takes to challenge yourself with some randomly selected core subjects questions on our platform? If yes, welcome to the challenge section."
        />
      </Col>
    </Row>
  );
};

export default Home;
