import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SociulLogin from "../SociulLogin/SociulLogin";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [agree, setAgree] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth, {
    sendEmailVerification: true,
  });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const email = emailRef.current.value;
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
            <Form.Check
              className={agree ? "text-danger" : "text-info"}
              onClick={() => setAgree(!agree)}
              name="check-box"
              type="checkbox"
              label="Accept terms and condition"
            />
          </Form.Group>
          {errorCap}
          <Button variant="primary" type="submit" disabled={!agree}>
            Submit
          </Button>
        </Form>
        <p>
          New To Genius Car?{" "}
          <Link to="/register" className="text-warning underline">
            Please Register
          </Link>
        </p>
        <p>
          Forfet Password?{" "}
          <button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
            className="text-warning underline"
          >
            Reset Password
          </button>
        </p>
      </div>
      <SociulLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
