import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase/firebase";
import { actionTypes } from "../state/reducer";
import { useStateValue } from "../state/StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.kansasfest.org/wp-content/uploads/slack.png"
          alt=""
        />
        <h1>Sign in to clever programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
