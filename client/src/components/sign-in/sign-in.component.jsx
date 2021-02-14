import React from 'react';

import "./sign-in.styles.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button.component';


class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event =>{
    event.preventDefault();
    this.setState({email : '', password: ''});
  }

  handleChange = event => {
    //Dynamically sets name based on name attribute
    const {value , name } = event.target;
    this.setState({ [name] : value});

  }

  signInWithGoogle = () => {
    console.log("This is a placeholder for sign in with google.")
  }

  render(){
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have and account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' value={this.state.email} handleChange={this.handleChange} required
          label='email' />
          

          <FormInput name='password' type="password" handleChange={this.handleChange} value={this.state.password} required 
          label='password'/>

          <div className="buttons">
            <CustomButton type='submit'>Sign In </CustomButton>
            <CustomButton isGoogleSignIn onClick={this.signInWithGoogle}>Sign In with Google </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;