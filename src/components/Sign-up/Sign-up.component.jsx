import React, { Component } from 'react';

import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import{ auth , CreateUserProfileDocument} from '../../firebase/firebase.utils';

import './Sign-up.styles.scss';

class SignUp  extends Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            ConfirmPassword : ''
        }
    }

   
    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, ConfirmPassword } = this.state;
    
        if (password !== ConfirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await CreateUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            ConfirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };

    handleChange = (event) => {
        const {name , value} = event.target;

        this.setState({[name] : value })

    }

    render(){
        const {displayName ,email ,password  ,ConfirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign-up using your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}> 
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name' 
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange = {this.handleChange}
                        label = 'Email' 
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange = {this.handleChange}
                        label = 'Password' 
                        required
                    />
                    <FormInput 
                        type='password'
                        name='ConfirmPassword'
                        value={ConfirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password' 
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;