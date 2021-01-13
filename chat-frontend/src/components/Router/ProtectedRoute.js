import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function ProtectedRoute({ component: Component, ...props }) {
  // see what is component:Component doing
  let isLoggedIn = useSelector((state) => {
    console.log("state", state);
    return state.authReducer.isLoggedIn;
  });

  console.log("isLoggedIn", isLoggedIn);
  return (
    <Route
      {...props}
      render={(props) => {
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

export default ProtectedRoute;

//you have to clear up lot of things in this
