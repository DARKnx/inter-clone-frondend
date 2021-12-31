import { useNavigate, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import swal from 'sweetalert';

import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/Card';

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';


const SignUp = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordtwo, setPasswordtwo] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const navigate = useNavigate();
const {userSignUp, user, getCurrentUser} = useAuth();  

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-ZÀ-ú$*&@#]{4,10}$/;


const handleToSingIn = async () => {

    const data = {
        email, 
        password,
        passwordtwo,
        firstName,
        lastName
    }


    const verification = Object.entries(data).every(([key, value]) => value !== "");
    if (verification === false) return swal({text: "Preencha todos os campos",icon: "info",});
    if (password !== passwordtwo) return swal({text: "As senhas não coincidem",icon: "info",});
    if (emailRegex.test(email) === false) return swal({text: "O email não e um email valido",icon: "info",});
    if (passwordRegex.test(password) === false) return swal({
        title: "A senha deve conter:",
        text: "1 Letra Maiúscula no mínimo\n1 Número no mínimo\n4 a 10 caracteres",
        icon: "info",
    });
    
    const response =  await userSignUp(data);
    if (response.id) return navigate('/dashboard');
   
}

useEffect(() => {
    getCurrentUser();
  }, [])

  //if (user.firstName) navigate('/dashboard')

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="NOME" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <Input placeholder="SOBRENOME" required value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input placeholder='EMAIL' type="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder='SENHA' type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                    <Input placeholder="CONFIRMAR SENHA" required type="password" value={passwordtwo} onChange={e => setPasswordtwo(e.target.value)}/>
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