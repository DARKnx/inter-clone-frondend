import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/Card';

import background  from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';


const SignIn = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const {userSignIn, user, getCurrentUser} = useAuth();
const navigate = useNavigate();


const handleToSignIn = async () => {

    const data = {
      email, 
      password
    }

    const response =  await userSignIn(data);
    if (response.id) return navigate('/dashboard');

}

useEffect(() => {
  getCurrentUser();
}, [])

//if (user.firstName) navigate('/dashboard')

  return (

<Wrapper>
 <Background image={background}/>
 <Card width='403px'>
  <img src={logoInter} width={172} height={61} alt='logo inter'/>
      <InputContainer>
        <Input placeholder='EMAIL' required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder='SENHA' required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </InputContainer>
      <ButtonContainer>
        <Button type='button' onClick={handleToSignIn}>Entrar</Button>
        <p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
      </ButtonContainer>
    
 </Card>
</Wrapper>

)}



export default SignIn;
