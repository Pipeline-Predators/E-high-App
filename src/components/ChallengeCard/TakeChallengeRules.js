import React, { useState, createContext } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  Modal,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTakeChallenge } from "../../services/QuizService";
import { setTakeChallengeState } from "Redux/TakeChallengeSlice";

// The handleClick props is coming from the TakeChallenge.js
export const questionNumber = createContext();
function TakeChallengeRules({ handleClick }) {
  const [modal, setModal] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(20);

  /* Getting the subjects from the redux store. */

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const onStartClicked = () => {
    const value = {
      questionNumber: questionNumber,
    };

    getTakeChallenge({ questionNumber: value.questionNumber }).then((value) => {
      dispatch(setTakeChallengeState(value));
      handleClick();
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card body className="my-2">
            <CardTitle tag="h3">Welcome to the challenge section</CardTitle>
            <CardText>
              This forum allows you to challenge yourself by answering random
              questions from different subjects.
            </CardText>
            <hr />
            <CardTitle tag="h5" className="my-3">
              READ THE FOLLOWING INSTRUCTIONS CAREFULLY BEFORE STARTING THE
              CHALLENGE.
            </CardTitle>
            <CardText tag="ol">
              <li>
                <p> Each question carries equal mark</p>{" "}
              </li>
              <li>
                <p>
                  Click on the take challenge now and indicate the number of
                  challenge questions you want to take
                </p>
              </li>
            </CardText>
            <Button color="primary" onClick={toggle}>
              Take Challenge Now
            </Button>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Form className="form justify-content-center pt-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Select Number of Questions. </Form.Label>
              <div>
                <Form.Check
                  onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  label="20 Questions"
                  value="20"
                  checked
                ></Form.Check>
                <Form.Check
                  onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="25"
                  label="25 Questions"
                ></Form.Check>
                <Form.Check
                  onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="30"
                  label="30 Questions "
                ></Form.Check>
                <Form.Check
                  onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="35"
                  label="35 Questions"
                ></Form.Check>
                <Form.Check
                  onChange={(event) => setQuestionNumber(event.target.value)}
                  type="radio"
                  name="questions"
                  value="40"
                  label="40 Questions "
                ></Form.Check>
              </div>
            </Form.Group>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end p-2">
          <Button color="primary mx-4" onClick={toggle}>
            Close
          </Button>
          <Button color="secondary" onClick={onStartClicked}>
            Start Challenge
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default TakeChallengeRules;
