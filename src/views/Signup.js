import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "services/StudentService";
import logo from "../assets/logo/logo.png";

const Signup = (props) => {
  let location = useHistory();

  const [enableButton, setEnabledButton] = React.useState(false);
  const [failedSignup, setFailedSignUp]  = React.useState("");

  const register = (input) => {
    signUp(input).then((value) => {
      if (value.status === "success"){
        location.push("./login");
      } else setFailedSignUp(value.message);
    });
  };

  const [input, setInput] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      input.firstname &&
      input.lastname &&
      input.email &&
      input.phonenumber &&
      input.password &&
      input.confirmPassword
    ) {
      setEnabledButton(true);
    } else {
      setEnabledButton(false);
    }
  }, [input, setEnabledButton]);

  const onInPutChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstname":
          if (!value) {
            stateObj[name] = "Please enter your first name.";
          }
          break;

        case "lastname":
          if (!value) {
            stateObj[name] = "Please enter your last name.";
          }
          break;
        case "phonenumber":
          if (!value) {
            stateObj[name] = "Please enter your phone number.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter your email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter your password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and confirm password do not match";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please confirm your password.";
          } else if (input.password && value !== input.password) {
            stateObj["confirmPassword"] =
              "Password and confirm password do not match";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  return (
    <Form className="form d-flex flex-column justify-content-center">
      <div className="login-info">
        <img className="login-logo" src={logo} alt="E-high" />

        <p>Create an account </p>
      </div>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          name="firstname"
          placeholder="Enter first name"
          value={input.firstname}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.firstname && <span className="err"> {error.firstname}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Enter last name"
          value={input.lastname}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.lastname && <span className="err"> {error.lastname}</span>}
      </Form.Group>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={input.email}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.email && <span className="err"> {error.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3  " controlId="formBasicText">
        <Form.Control
          type="text"
          name="phonenumber"
          placeholder="Enter your phone number"
          value={input.phonenumber}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.phonenumber && <span className="err"> {error.phonenumber}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your password"
          value={input.password}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.password && <span className="err"> {error.password}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={input.confirmPassword}
          onChange={onInPutChange}
          onBlur={validateInput}
        />

        {error.confirmPassword && (
          <span className="err"> {error.confirmPassword}</span>
        )}
      </Form.Group>
      <p className="text-danger">{failedSignup}</p>
      <Button
        disabled={!enableButton}
        className="button mb-3"
        variant="dark"
        onClick={() => register(input)}
      >
        Sign up
      </Button>
      <br />
      <Form.Text className="text-muted">
        <span>
          Already have an account?
          <Link to={"/login"}>
            <span onClick={props.handleClick}> Log in</span>
          </Link>
        </span>
      </Form.Text>
    </Form>
  );
};

export default Signup;
