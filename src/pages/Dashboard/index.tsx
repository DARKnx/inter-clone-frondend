import  { useEffect, useState} from 'react'
import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './styles'

import Card from '../../components/Card'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Statement from './Statament'
import useAuth from '../../hooks/useAuth'
import {pay, request} from '../../services/resources/pix'

const Dashboard = () => {
    
    const {user, getCurrentUser} = useAuth();
    
    const [values, setValues] = useState('')
    const [key, setKey] = useState('')
    const [generatedKey, setGeneratedKey] = useState('')

    useEffect(() => {

        getCurrentUser()

    }, [])
 
if (!user.firstName){
    return (
        <h1>404</h1>
    )
} 

var wallet = user.wallet;




const handlerNewPayment = async () => {


 const {data} = await request(Number(values))   
 
 if (data.copyPasteKey){
    setGeneratedKey(data.copyPasteKey)
 }

}
const handlerReceivePix = async () => {
 
    try {
        const {data} = await pay(key)
        if (data.msg){
            alert(data.msg)
            return
        }
        alert("Não foi possivel fazer o pagamento")
    }catch(e){
        console.log(e)
        alert("Não foi possivel fazer o pagamento")
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