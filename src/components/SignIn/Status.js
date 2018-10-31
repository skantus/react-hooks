import { useState } from "react";

const useSigninStatus = status => {
  const [isSignin, setSignin] = useState(status);

  function Signin() {
    setSignin(true);
  }

  function Signout() {
    setSignin(false);
  }

  return {
    isSignin,
    Signin,
    Signout
  };
};

export default useSigninStatus;
