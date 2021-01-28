import React from "react";

import {
  EnvelopSerie,
  PlusCicle,
  Envelop,
  Alert,
  Accept
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
  SistemValue,
  FluxBoxDiv,
  FluxDivBox,
  FluxBxDiv,
  DivSituation,
  Waiting,
  Approve,
  Reprove,
  ApproveReprove,
  CircleDenied,
  Link,
  Tittle
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
                    Solicitação gerada por <span style={{ color: "var(--color-blue-primary" }}>Sistema Credfica</span>
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
                      <Link>
                        Ver Comprovante
                      </Link>
                    </SistemBox>
                    <SistemBox>
                      Verso do Cartão
                      <ImgEnvelop src={Envelop} alt="" />
                      <Link>
                        Ver Comprovante
                      </Link>
                    </SistemBox>
                    <SistemBox>
                      Selfie do Cartão
                      <ImgEnvelop src={Envelop} alt="" />
                      <Link>
                        Ver Comprovante
                      </Link>
                    </SistemBox>
                  </SistemDivBox>
                </SistemDiv>
                <SistemDiv>
                  <SistemTitle>
                    Fluxo da Solicitação: <span style={{ color: "var(--color-blue-primary" }}>                      Manual</span>
                  </SistemTitle>
                  <FluxBox>
                    Modalidade:
                    <FluxBoxDiv>
                      <span>Cartão de Credito</span>
                      <span>Número do Cartão: 5252 0565 6526 6552</span>
                      <span>Validade 03/27</span>
                      <span>1 parcelas de: <SistemValue>R$ 200</SistemValue></span>
                      <span>Tabela: Tabela Padrão</span>
                    </FluxBoxDiv>
                  </FluxBox>
                  <FluxBox>
                    Informações do Cliente:
                    <FluxDivBox>
                      <span>Nome: Lara B Esquivel</span>
                      <span>CPF: 866.666.965.87</span>
                      <span>Agência: 1235</span>
                      <span>Banco: 029 - Banco Itaú Consignado S.A. </span>
                      <span>Tipo de Conta: Poupança </span>
                      <span>Número da conta: 222245</span>
                    </FluxDivBox>
                  </FluxBox>
                  <FluxBxDiv>
                    Informações Gerais:
                    <FluxBoxDiv>
                      <span>Data: 09/03/2020</span>
                      <DivSituation>
                        <Waiting>
                          <CircleDenied src={Alert} alt="" />
                          <Tittle>Aguardando</Tittle>
                        </Waiting>
                        <ApproveReprove>
                          <Approve>
                            <CircleDenied src={Accept} alt="" />
                            <Tittle>Pré Aprovar</Tittle>
                          </Approve>

                          <Reprove>
                            <CircleDenied src={Alert} alt="" />
                            <Tittle>Reprovar</Tittle>
                          </Reprove>
                        </ApproveReprove>
                      </DivSituation>
                    </FluxBoxDiv>
                  </FluxBxDiv>
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
