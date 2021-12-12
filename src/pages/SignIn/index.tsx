import React from 'react'

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import background  from '../../assets/images/background-login.jpg';
import Card from '../../components/Card';

const SignIn = () => {
    return (

        <Wrapper>
         
          <Background image={background}/>
          <Card width='403px'>DARKnx</Card>
        </Wrapper>
    )
}

export default SignIn;
