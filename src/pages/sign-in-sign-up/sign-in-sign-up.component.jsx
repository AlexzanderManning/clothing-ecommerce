import React from 'react';
import "./sign-in-sign-up.styles.scss";
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
      <SignIn className='sign-in'></SignIn>
      <SignUp></SignUp>
  </div>
);

export default SignInAndSignUp;