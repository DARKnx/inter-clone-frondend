import {HeaderContainer, HeaderWrapper, UserInfo} from './style';

import { useEffect } from 'react'
import logoInter from '../../assets/images/Inter-orange.png';
import UserCircle from '../userCircle';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth' 

const Header = () => {
   
const navigate = useNavigate();
const {user} = useAuth();

 
var initials = 'I';
if (user.firstName != undefined) initials = user.firstName.substr(0, 1) + user.lastName.substr(0, 1) 


    const handleLogoff = () => {
      localStorage.clear();
      setTimeout(() => { navigate('/signin') }, 5000)
    }
   
    return (
        <HeaderContainer>
            <HeaderWrapper>
                   <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                 <UserCircle initials={initials}/>
                  <div>
                      <p>Olá, <span className="primary-color font-bold">{user.firstName } {user.lastName }</span></p>
                      <strong>{user.accountNumber}-{user.accountDigit }</strong><br/>
                      <a href="#" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header