import { Link, useNavigate } from 'react-router-dom';
import  { useEffect, useState} from 'react';
import swal from 'sweetalert';

import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './styles';
import {pay, request} from '../../services/resources/pix';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import Card from '../../components/Card';
import Statement from './Statament';
import Error from '../error';




const Dashboard =  () => {
    
    const {user, getCurrentUser} = useAuth();
    const navigate = useNavigate();  
   
    const [values, setValues] = useState('')
    const [key, setKey] = useState('')
    const [generatedKey, setGeneratedKey] = useState('')
    var wallet = 0;


    useEffect(() => {
        getCurrentUser();
    }, [])
  
    if (!user.firstName){

        navigate('/signin');  
        return (<Error/>) 

    } else {
        wallet = user.wallet;
    }


    
  


const handlerNewPayment = async () => {
    
    if (values == "") return swal({text: "Valor de pagamento obrigatorio"});
    if (isNaN(Number(values))) return swal({text: "Use apenas numeros"});
    if (0 >= Number(values)) return swal({text: "Use valores acima de 1"});

    const {data} = await request(Number(values));
    
    if (data.copyPasteKey){
        setGeneratedKey(data.copyPasteKey)
    } else {
        return swal({text: "Ouve um problema ao gerar a chave PIX",icon: "info"});
    }


}



const handlerReceivePix = async () => {
   
    if (key == "") return swal({text: "Chave PIX obrigatoria"}); 

      try {

    const {data} = await pay(key);
   window.location.reload()

} catch(e){
    swal({text: "Não foi possivel efetuar o pagamento", icon:'info'}); 
}


}



    return (
        
       <DashboardBackground>
            <Header/>
            <BodyContainer>
              <div>
              <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Saldo Atual</h2>
                       </InlineTitle>
                       <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineContainer>
                   </Card>

                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Receber PIX</h2>
                       </InlineTitle>
                       <InlineContainer>
                          <Input  style={{flex: 1}}  value={values} onChange={e => setValues(e.target.value)} placeholder='Valor'/>
                          <Button onClick={handlerNewPayment}>Gerar Codigo</Button>
                        </InlineContainer>
                        {generatedKey &&  ( 
                           <>
                       <p className="primary-color">PIX copia e cola</p>
                       <p className="primary-color">{generatedKey}</p>
                       </>
                        )}
                   </Card>    

                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Pagar PIX</h2>
                       </InlineTitle>
                       <InlineContainer>
                       <Input  style={{flex: 1}}  value={key} onChange={e => setKey(e.target.value)} placeholder='Insira a chave'/>
                          <Button onClick={handlerReceivePix}>Pagar PIX</Button>
                        </InlineContainer>

                   </Card> 

              </div>
      
              <div>
              <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Extrato da conta</h2>
                       </InlineTitle>
                      <Statement/>
                   </Card>
              </div>

            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard