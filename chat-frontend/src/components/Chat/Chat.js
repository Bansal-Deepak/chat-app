import React from "react";
import { useSelector } from "react-redux";
function Chat() {
  let loggedUser = useSelector((state) => {
    console.log("chatstate", state);
    return state.authReducer.user;
  });
  //useSelector hook is used for getting global state variables
  return (
    <div>
      <h1>Chat Screen</h1>
      <h2>
        Welcome {loggedUser.firstName}
        {loggedUser.lastName}
      </h2>
    </div>
  );
}

export default Chat;
