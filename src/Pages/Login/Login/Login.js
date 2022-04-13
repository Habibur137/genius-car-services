import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SociulLogin from "../SociulLogin/SociulLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const formSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  let errorCap;
  if (error) {
    errorCap = <p className="text-danger my-2">Error: {error.message}</p>;
  }
  return (
    <div>
      <h2 className="text-primary text-center mt-3">Please Login</h2>
      <div className="mx-auto w-25 ">
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {errorCap}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          New To Genius Car?{" "}
          <Link to="/register" className="text-warning underline">
            Please Register
          </Link>
        </p>
      </div>
      <SociulLogin />
    </div>
  );
};

export default Login;
