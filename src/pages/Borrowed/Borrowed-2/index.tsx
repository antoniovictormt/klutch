import React from "react";
import { useHistory } from "react-router-dom";

import {
  EnvelopSerie,
  PlusCicle
} from '../../../assets';

import {
  Header
} from '../../../components';

import {
  ButtonValorDesejado,
  ContainerLg,
  DivCalculo,
  DivValueAndButton,
  Divisor,
  SpanButtonValorDesejado,
  SpanDivisor,
  SpanInfo,
  ContainerDiv,
  TitleValorDesejado,
  ContainerBorrowed2,
  Img,
  DivImg,
  Title
} from './styles'

type Porps = {};

const Borrowed2 = (props: Porps) => {
  const search = () => { };

  const history = useHistory();
  const handleClick = () => history.push('/borrowed-third');

  return (
    <React.Fragment>
      <Header />
      <ContainerBorrowed2>
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
              <TitleValorDesejado>Escolha a modalidade</TitleValorDesejado>
              <DivValueAndButton>
                <ButtonValorDesejado
                  onClick={handleClick}
                >
                  <SpanButtonValorDesejado>
                    Cartão de Crédito
                  </SpanButtonValorDesejado>
                </ButtonValorDesejado>
                <Divisor>
                  <SpanDivisor>Ou</SpanDivisor>
                </Divisor>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                  disabled={true}
                >
                  <SpanButtonValorDesejado>
                    Crédito Consignado
                  </SpanButtonValorDesejado>
                </ButtonValorDesejado>
                <SpanInfo style={{ textAlign: "right" }}>Em breve</SpanInfo>
              </DivValueAndButton>
            </DivCalculo>
          </ContainerDiv>
        </ContainerLg>
      </ContainerBorrowed2>
    </React.Fragment>
  );
};

export default Borrowed2;