import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SociulLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorCap;
  if (error) {
    errorCap = <p className="text-danger my-2">Error: {error.message}</p>;
  }
  return (
    <div>
      <div className="d-flex align-items-center mt-3 w-50 mx-auto">
        <div
          style={{ height: "1px", background: "pink" }}
          className="w-25"
        ></div>
        <p className="">or</p>
        <div
          style={{ height: "1px", background: "pink" }}
          className="w-25"
        ></div>
      </div>
      <div className="text-center">
        {errorCap}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info text-white d-block mx-auto mb-3 py-2 px-5"
        >
          Google Sign In
        </button>
        <button className="btn btn-info text-white py-2 px-5">
          GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SociulLogin;