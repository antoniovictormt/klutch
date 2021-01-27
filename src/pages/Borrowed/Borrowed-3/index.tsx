import React from "react";
import { useHistory } from "react-router-dom";

import {
  EnvelopSerie,
  PlusCicle,
  Visa
} from '../../../assets';

import {
  Header
} from '../../../components';

import {
  ButtonValorDesejado,
  ContainerLg,
  DivBase,
  DivCalculo,
  DivInfo,
  DivInput,
  DivLeft,
  DivValueAndButton,
  Input,
  InputCard,
  SpanButtonValorDesejado,
  SpanHeadForm,
  SpanSublinhado,
  ContainerBorrowed3,
  ContainerDiv,
  DivImg,
  Img,
  Title
} from './styles'

type Porps = {};

const Borrowed3 = (props: Porps) => {

  const history = useHistory();
  const handleClick = () => history.push('/borrowed-fourth');

  return (
    <React.Fragment>
      <Header />
      <ContainerBorrowed3>
        <ContainerLg>
          <ContainerDiv>
            <DivImg>
              <Img src={PlusCicle} alt="" />
              <Img src={EnvelopSerie} alt="" />
              <div style={{ width: 300 }}>
                <Title>Solicitar Emprestimo</Title>
              </div>
            </DivImg>
            <DivCalculo>
              <DivValueAndButton>
                <DivLeft>
                  <SpanHeadForm>Insira os dados do Cartão:</SpanHeadForm>
                  <Input placeholder="Nome no cartão" type="text" name="v" />
                  <DivInput>
                    <DivBase>
                      <div>
                        <InputCard
                          placeholder="Número impresso"
                          type="text"
                          name="v"
                        />
                      </div>
                      <div style={{ alignItems: "center", display: "flex" }}>
                        <img
                          src={Visa}
                          width={60}
                          height={40}
                          alt="imagem Visa"
                        />
                      </div>
                    </DivBase>
                  </DivInput>
                  <Input placeholder="Data de Validade" type="text" name="c" />
                  <Input placeholder="CVC" type="text" name="f" />
                </DivLeft>
                <DivLeft>
                  <SpanHeadForm>
                    Faça o upload dos anexos do cartão:
                  </SpanHeadForm>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Cartão de Crédito (Frente)</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Cartão de Crédito (Verso)</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInput>
                    <DivBase>
                      <div>
                        <span>Selfie com cartão de crédito</span>
                      </div>
                      <div>
                        <SpanSublinhado>Adicionar</SpanSublinhado>
                      </div>
                    </DivBase>
                  </DivInput>
                  <DivInfo style={{ background: "white" }}>
                    <div>
                      <p>
                        Atenção: As fotos devem estar legíveis, com todas as
                        informações visíveis do cartão.
                      </p>
                    </div>
                  </DivInfo>
                </DivLeft>
                <div style={{ marginTop: 40 }}>
                  <ButtonValorDesejado
                    onClick={handleClick}
                  >
                    <SpanButtonValorDesejado>Continuar</SpanButtonValorDesejado>
                  </ButtonValorDesejado>
                </div>
              </DivValueAndButton>
            </DivCalculo>
          </ContainerDiv>
        </ContainerLg>
      </ContainerBorrowed3>
    </React.Fragment>
  );
};

export default Borrowed3;