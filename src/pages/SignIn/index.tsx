import {useEffect, useState} from 'react'

import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import background  from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png'
import { Link, useNavigate } from 'react-router-dom';



import useAuth from '../../hooks/useAuth'

const SignIn = () => {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const {userSignIn} = useAuth();
const navigate = useNavigate()
const handleToSignIn = async () => {
  const data = {
email, 
password
  }
const response =  await userSignIn(data)
if (response.id){
navigate('/dashboard');


} 
console.log('usuario ou senha invalidos')
alert('Usuário ou senha inválidos')

}

  return (

<Wrapper>
 <Background image={background}/>
 <Card width='403px'>
  <img src={logoInter} width={172} height={61} alt='logo inter'/>
      <InputContainer>
        <Input placeholder='EMAIL'  value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder='SENHA' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </InputContainer>
      <ButtonContainer>
        <Button type='button' onClick={handleToSignIn}>Entrar</Button>
        <p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
      </ButtonContainer>
 </Card>
</Wrapper>

)}



export default SignIn;
