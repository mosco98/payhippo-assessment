import React from "react";
import { Route } from "react-router-dom";
import { Signin, Signup, Home } from "./pages";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </>
  );
};

export default App;
