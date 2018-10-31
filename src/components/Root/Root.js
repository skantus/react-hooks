import React, { useState } from "react";
import "./style.css";
import Signin from "../SignIn/SignIn";
import useSigninStatus from "../SignIn/Status";
import Counter from "../Counter/Counter";

const Root = () => {
  const [value, Setvalue] = useState(0);

  let status = useSigninStatus(false);

  function Incvalue() {
    return Setvalue(value + 1);
  }

  function Decvalue() {
    return Setvalue(value - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Signin {...status} />
        <Counter
          isSignin={status.isSignin}
          value={value}
          Increment={Incvalue}
          Decrement={Decvalue}
        />
      </header>
    </div>
  );
};

export default Root;
