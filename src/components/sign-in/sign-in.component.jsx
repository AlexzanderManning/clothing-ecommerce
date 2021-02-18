import React, { useState } from "react";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";

import { setCurrentUser } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom.button.component";
import "./sign-in.styles.scss";

//TODO Handle Errors when sign in fails.
const SignIn = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { email }  = await signInWithAmplify();
    setCurrentUser(email);
  }

  async function signInWithAmplify() {
    try {
      const user = await Auth.signIn(email, password);
      return user.attributes;
    } catch (error) {
      console.log("error signing in", error);
      alert("error signing in", error);
    }
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
          label="username"
          type="text"
        />

        <FormInput
          name="password"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          label="password"
        />

        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default connect(null, { setCurrentUser })(SignIn);

