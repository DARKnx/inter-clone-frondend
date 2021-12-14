import React from 'react'
import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './styles'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Statement from './Statament'

const Dashboard = () => {

    const wallet = 5000;

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
                          <Input  style={{flex: 1}} placeholder='Valor'/>
                          <Button>Gerar Codigo</Button>
                        </InlineContainer>
                        <p className="primary-color">PIX copia e cola</p>
                        <p className="primary-color">4N3kb0lXnH5Q7PAdhxbeR-MVvCjbEfTX</p>
                   </Card>    

                   <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Pagar PIX</h2>
                       </InlineTitle>
                       <InlineContainer>
                          <Input  style={{flex: 1}} placeholder='Insira a chave'/>
                          <Button>Pagar PIX</Button>
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