import React from "react";

export default ({ value, isSignin, Increment, Decrement }) =>
  isSignin && (
    <div>
      <h1>{value}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
