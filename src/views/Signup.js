import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "services/StudentService";

const Signup = (props) => {
  let location = useHistory();

  const [enableButton, setEnabledButton] = React.useState(false);
  const register = (input) => {
    signUp(input).then((value) => {
      if (value.status === "success") location.push("./login");
    });
  };

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter your first name.";
          }
          break;

        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter your last name.";
          }
          break;
        case "phoneNumber":
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
            stateObj[name] = "Please enter your password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
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
      <h2>E-high logo</h2> {/*Place a logo of e-High app here  */}
      <h1>Create your Account</h1>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={input.firstName}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.firstName && <span className="err"> {error.firstName}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Enter first name"
          value={input.lastName}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.lastName && <span className="err"> {error.lastName}</span>}
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
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Control
          type="number"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={input.phoneNumber}
          onChange={onInPutChange}
          onBlur={validateInput}
        />
        {error.phoneNumber && <span className="err"> {error.phoneNumber}</span>}
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
          placeholder="Enter your password"
          value={input.confirmPassword}
          onChange={onInPutChange}
          onBlur={validateInput}
        />

        {error.confirmPassword && (
          <span className="err"> {error.confirmPassword}</span>
        )}
      </Form.Group>
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
