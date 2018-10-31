import React from "react";

const Signin = ({ isSignin, Signout, Signin }) => (
  <button onClick={isSignin ? Signout : Signin}>
    {isSignin ? "SIGN OUT" : "SING IN"}
  </button>
);

export default Signin;
