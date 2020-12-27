import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children ,IsGoogleSignIn, ...otherprops}) => (
    <button className={`${IsGoogleSignIn ? 'google-sign-in' : '' } custom-button `}{...otherprops} >
        {children}
    </button>

)


export default CustomButton;