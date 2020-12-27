import React, { Component } from 'react';

import FormInput from '../Form-input/Form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './SignIn.styles.scss'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            email : '' ,
            password : ''
        }
    }

    HandleSubmit = (event) => {
        event.preventDefault();
        this.setState({email : '' , password : ''})
    }

    HandleChange = (event) => {
        const {value , name } = event.target;

        this.setState({[name] : value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <label>signIn with your email and password</label>

                <form onClick={this.HandleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        label='email'
                        handlechange={this.HandleChange}
                        required />
                   
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        label='password'
                        handlechange={this.HandleChange}
                        required />
                    
                    <CustomButton type='submit'> SignIn </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;