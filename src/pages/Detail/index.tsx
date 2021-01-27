import React from "react";

import {
  EnvelopSerie,
  PlusCicle,
  Envelop
} from '../../assets';

import {
  Header
} from '../../components';

import {
  ContainerDetail,
  ContainerLg,
  ContainerDiv,
  DetailDiv,
  SistemDiv,
  ImgEnvelop,
  DivFlex,
  DivImg,
  Img,
  Title,
  SistemBox,
  FluxBox,
  SistemDivBox,
  SistemTitle,
  SistemSpan,
  SistemValue
} from './styles';

function Detail() {
  return (
    <React.Fragment>
      <Header />
      <ContainerDetail>
        <ContainerLg>
          <ContainerDiv>
            <DivImg>
              <Img src={PlusCicle} alt="" />
              <Img src={EnvelopSerie} alt="" />
              <div style={{ width: 300 }}>
                <Title>Detalhe de Solicitação</Title>
              </div>
            </DivImg>
            <DivFlex>
              <DetailDiv>
                <SistemDiv>
                  <SistemTitle>
                    Solicitação gerada por
                    <SistemSpan>
                      Sistema CredFica
                    </SistemSpan>
                  </SistemTitle>
                  <SistemDivBox>
                    <SistemBox>
                      Valor Total
                      <SistemValue>R$ 6000,00</SistemValue>
                      <p></p>
                    </SistemBox>
                    <SistemBox>
                      Valor a Depositar
                      <SistemValue>R$ 6000,00</SistemValue>
                      <p></p>
                    </SistemBox>
                    <SistemBox>
                      Frente do Cartão
                      <ImgEnvelop src={Envelop} alt="" />
                      <span>Ver Comprovante</span>
                    </SistemBox>
                    <SistemBox>
                      Verso do Cartão
                      <ImgEnvelop src={Envelop} alt="" />
                      <span>Ver Comprovante</span>
                    </SistemBox>
                    <SistemBox>
                      Selfie do Cartão
                      <ImgEnvelop src={Envelop} alt="" />
                      <span>Ver Comprovante</span>
                    </SistemBox>
                  </SistemDivBox>
                </SistemDiv>
                <SistemDiv>
                  <SistemTitle>
                    Fluxo da Solicitação:
                    <SistemSpan>
                      Manual
                    </SistemSpan>
                  </SistemTitle>
                  <FluxBox>
                    Modalidade:
                    <span>Cartão de Credito</span>
                    <span>Número do Cartão: 5252 0565 6526 6552</span>
                    <span>Validade 03/27</span>
                    <span>1 parcelas de: <SistemValue>R$ 200</SistemValue></span>
                    <span>Tabela: Tabela Padrão</span>
                  </FluxBox>
                  <FluxBox>
                    Informações do Cliente:
                    <span>Nome: Lara B Esquivel</span>
                    <span>CPF: 866.666.965.87</span>
                    <span>Agência: 1235</span>
                    <span>Banco: 029 - Banco Itaú Consignado S.A. </span>
                    <span>Número da conta: 222245</span>
                  </FluxBox>
                  <FluxBox>
                    Informações Gerais:
                    <span>Data: 09/03/2020</span>
                    <span>Aguardando</span>
                    <span>Pré Arpovar</span>
                    <span>Reprovar</span>
                  </FluxBox>
                </SistemDiv>
              </DetailDiv>
            </DivFlex>
          </ContainerDiv>
        </ContainerLg>
      </ContainerDetail>
    </React.Fragment>
  )
}

export default Detail;
