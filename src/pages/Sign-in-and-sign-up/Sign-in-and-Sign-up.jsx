import React from 'react';

import './Sign-in-and-Sign-up.styles.scss';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/Sign-up/Sign-up.component'

const SignInAndSignup = () => {
    return(
        <div className='sign-in-and-sign-up'>
          <SignIn />
          <SignUp />
        </div>
    )
}

export default SignInAndSignup;