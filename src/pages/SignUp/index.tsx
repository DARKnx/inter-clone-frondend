
import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import { useNavigate, Link } from 'react-router-dom';
import {useState} from 'react'

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';
import useAuth from '../../hooks/useAuth'
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
    const navigate = useNavigate();
    const {userSignUp} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
   
    

    const handleToSingIn = async () => {

        const data = {
            email, 
            password,
            firstName,
            lastName
              }
              const response =  await userSignUp(data)
            if (response.id){
            navigate('/dashboard');
            
            } 
           

    }
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="NOME" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <Input placeholder="SOBRENOME" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input placeholder='EMAIL'  value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder='SENHA' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <Input placeholder="CONFIRMAR SENHA" type="password"/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSingIn}>CADASTRE-SE</Button>
                    <p>Já tem uma conta? <Link to="/">Entre Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;