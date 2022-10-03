import { Button, Form, Col, Row, Input, FormText } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { signIn } from "services/StudentService";
import { useAuth } from "Guards/Auth";
import logo from "../assets/logo/logo.png";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState("");

  const auth = useAuth();
  const history = useHistory();

  /**
   *Signin() calls the signIn() which is a function that returns a promise that calls .
   *dispatch() which is a function that calls setStudentState() which is a function that returns a
   *value
   */

  const signin = () => {
    signIn(email, password).then((value) => {
      auth.login(value);

      // if (!auth.student) {
      //   // print failed login message
      //   setFailedLogin("Incorrect Email or Password");
      //   window.location.reload();;
      // } else {
      // }
      history.push("./");
    });
  };

  return (
    <Row className="mx-0">
      <Col lg={4}></Col>
      <Col lg={4} xs={12}>
        <Form className="form d-flex flex-column justify-content-center px-4">
          <div className="login-info">
            <img className="login-logo" src={logo} alt="E-high" />
            {/*Place a logo of e-High app  */}
            <p className="text-bolder">Log in</p>
          </div>
          {!auth.student && (
            <h4 className="text-danger" id="login">
              {failedLogin}
            </h4>
          )}
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className="my-3"
            type="password"
            placeholder=" Enter password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            variant="dark"
            onClick={signin}
            // disabled={!(email && password)}
          >
            Log in
          </Button>
          <br />
          <Button variant="dark">Forgot password?</Button>
          <FormText className="text-muted">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span onClick={props.handleClick}>Sign up</span>
            </Link>
          </FormText>
        </Form>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
};

export default Login;
