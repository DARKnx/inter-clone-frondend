import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import swal from 'sweetalert';


import { Background, ContainerError} from './styles';
import useAuth from '../../hooks/useAuth';
import  Particles from './particles';




const Error = () => {

    const {user, getCurrentUser} = useAuth(); 
    const navigate = useNavigate();


    const handleLogoff = () => {

      getCurrentUser()
      if (!user.firstName){
        navigate('/')
      } else {
        navigate('/dashboard')
      }
    }
    
    useEffect(() => {
    
     
      setTimeout(() => {
     
        
        swal({
            title: "Deseja voltar para a pagina inicial ?",
            text: "A pagina procurada não existe",
            icon: 'info',
            buttons: ["NÃO", "VOLTAR"]

        }).then((reaction) => {
             
             if (reaction){
                  return handleLogoff();
             }
        })

      }, 12*1000)

    })


return(

<Background>
 
    <ContainerError>
    <a href="#" onClick={handleLogoff} className='message' >404</a>
    <a className='pagenotfound'>PAGE NOT FOUND</a>
    <Particles/>
    </ContainerError>

</Background>

)


}


export default Error;
