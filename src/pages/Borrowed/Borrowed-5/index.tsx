import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import {
  EnvelopSerie,
  PlusCicle,
  Visa
} from '../../../assets';

import {
  Header
} from "../../../components";

import {
  ButtonValorDesejado,
  ContainerLg,
  DivBaseSelectTop2,
  DivImg,
  DivTitleSelect,
  Img,
  SpanButtonValorDesejado,
  SpanHeadForm,
  SpanName,
  SpanSelect,
  SpanTipoContrato,
  SpanTipoContrato2,
  Title,
  Wrapper
} from './styles';

import Api from "../../../services/api.json";

import { FaCheck } from "react-icons/fa";

type Porps = {};

const Borrowed5 = (props: Porps) => {

  interface RatetableModel {
    id: number;
    name: string;
    default: boolean;
    installments: [
      {
        id: number;
        installments: number;
        installmentInterest: number;
        installmentValue: number;
        fullValue: number;
        comission: number;
      }
    ];
  }

  const [, setRateTable] = useState<RatetableModel[]>([]);
  const searchTable = () => {
    // const data:object = Api.rateTable[0];
    let arr = [Api.rateTable[0]];

    setRateTable(Object(arr));
    console.log(arr);
  };

  useEffect(() => {
    searchTable();
  }, []);

  const history = useHistory();
  const handleClick = () => history.push('/detail');

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <ContainerLg>
          <div style={{ display: "grid", width: "100%" }}>
            <DivImg>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Img src={PlusCicle} alt="" width={50} height={58} />
                <Img src={EnvelopSerie} alt="" />
                <div style={{ width: 300 }}>
                  <Title>Solicitar Emprestimo</Title>
                </div>
              </div>
            </DivImg>

            <SpanHeadForm>Solicitação Realizada com Sucesso!</SpanHeadForm>

            <SpanTipoContrato2>Resumo da Solicitação</SpanTipoContrato2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  justifyContent: "flex-start",
                  display: "grid",
                }}
              >
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanName>João Paulo Guedes</SpanName>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#777777" }}>
                      71 9988-7766
                                    </SpanSelect>
                    {/* <img src={IconChecked} alt="" width={30} height={30} /> */}
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <img src={Visa} width={60} height={40} alt="" />
                    <SpanSelect style={{ marginLeft: 10 }}>4327</SpanSelect>
                    <SpanSelect style={{ color: "#484646" }}>VISA</SpanSelect>
                    <SpanSelect>02/10</SpanSelect>
                  </DivTitleSelect>

                  <DivTitleSelect>
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Valor desejado:</SpanSelect>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                      R$ 7.200,00
                    </SpanSelect>
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "flex-end",
                  display: "grid",
                }}
              >
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Taxa de Juros</SpanSelect>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#ef9c4b", fontSize: 20 }}>
                      12%
                    </SpanSelect>
                    {/* <img src={IconChecked} alt="" width={30} height={30} /> */}
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Parcelas:</SpanSelect>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#ef9c4b", fontSize: 20 }}>
                      12
                    </SpanSelect>
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Valor da parcela:</SpanSelect>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                      R$ 433,00
                    </SpanSelect>
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <div style={{ width: 500, display: "flex" }}>
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Valor total do empréstimo:</SpanSelect>
                  </DivTitleSelect>
                  <DivTitleSelect>
                    <SpanSelect style={{ color: "#31AC2B", fontSize: 20 }}>
                      R$ 7.200,00
                    </SpanSelect>
                    <FaCheck color={"#228A95"} size={20} />
                  </DivTitleSelect>
                </DivBaseSelectTop2>
              </div>
              <div style={{ width: 500, display: "flex" }}>
                <ButtonValorDesejado
                  onClick={handleClick}
                >
                  <SpanButtonValorDesejado >
                    Detalhe da Solicitação
                  </SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </div>
              <SpanTipoContrato>
                O CredFica avaliará a solicitação.
              </SpanTipoContrato>
            </div>
            <div></div>
          </div>
        </ContainerLg>
      </Wrapper>
    </React.Fragment>
  );
};

export default Borrowed5;
