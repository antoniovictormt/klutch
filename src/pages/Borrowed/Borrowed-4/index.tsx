import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Api from "../../../services/api.json";
import { useAuth } from '../../../context/context2';

import {
  EnvelopSerie,
  PlusCicle,
  Checkmark
} from '../../../assets';

import {
  Header,
} from "../../../components";

import {
  ButtonValorDesejado,
  ContainerBorrowed4,
  ContainerDiv,
  ContainerLg,
  DivBaseSelectTop,
  DivBaseSelectTop2,
  DivImg,
  DivSelect,
  DivTable,
  DivTitleSelect,
  Img,
  Input,
  Select,
  SelectOption,
  SpanButtonValorDesejado,
  SpanSelect,
  SpanTipoContrato,
  Table,
  TableColItem,
  TableColTitle,
  Title,
  TitleNameTable
} from './styles'

type Porps = {};

const Borrowed4 = (props: Porps) => {
  const { user, pedidoEmprestimo, createSolicitation } = useAuth()
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

  const [rateTable, setRateTable] = useState<RatetableModel[]>([]);
  const search = () => { };

  const history = useHistory();
  const handleClick = () => {

    let data = new Date();
    let numAleatorio = Math.floor(1000 * Math.random())
    let numWithDate = numAleatorio + "" + Number(data);

    interface Solicitations {
      id?: number,
      clientId?: number,
      installmentInterest?: number,
      installmentInterestValue?: number,
      comission?: number,
      comissionValue?: number,
      installmentValue?: number,
      cardNumber?: string,
      desiredValue?: number,
      totalLoan?: number,
      installmentId?: number,
      rateTableId?: number,
    }

    let objSolicitations: Solicitations = {
      id: Number(numWithDate),
      clientId: user?.id,
      installmentInterest: pedidoEmprestimo?.jurosParcelas,
      installmentInterestValue: 1,
      comission: pedidoEmprestimo?.comissao,
      comissionValue: 1,
      installmentValue: 1,
      cardNumber: "Num cartão",
      desiredValue: pedidoEmprestimo?.valorDesejado,
      totalLoan: 1,
      installmentId: 1,
      rateTableId: pedidoEmprestimo?.idTabela,
    }

    // console.log("Solicitação");
    // console.log(objSolicitations);
    createSolicitation(objSolicitations)
    history.push(`/borrowed-fifth/${Number(numWithDate)}`)
  };

  const searchTable = () => {
    let arr = [Api.rateTable[0]];

    setRateTable(Object(arr));
    console.log(arr);
  };

  useEffect(() => {
    searchTable();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ContainerBorrowed4>
        <ContainerLg>
          <ContainerDiv>
            <DivImg>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Img src={PlusCicle} alt="" width={50} height={60} />
                <Img src={EnvelopSerie} alt="" />
                <div style={{ width: 300 }}>
                  <Title>Solicitar Emprestimo</Title>
                </div>
              </div>
              <DivBaseSelectTop>
                <DivTitleSelect>
                  <SpanSelect>Tabela</SpanSelect>
                </DivTitleSelect>
                <DivSelect>
                  <Select name="" id="">
                    <SelectOption value="tabela">Tabela Padrão</SelectOption>
                    <SelectOption value="tabela">Tabela Especial</SelectOption>
                  </Select>
                </DivSelect>
              </DivBaseSelectTop>
            </DivImg>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 40,
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
                    <SpanSelect>Valor desejado:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="R$1.000,00" type="text" name="valor_desejado" value={pedidoEmprestimo?.valorDesejado} disabled={true} />
                  </DivSelect >
                </DivBaseSelectTop2 >
                <DivBaseSelectTop2>
                  <DivTitleSelect>
                    <SpanSelect>Parcelas:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Select name="" id="">
                      <SelectOption value="tabela">1</SelectOption>
                      <SelectOption value="tabela">2</SelectOption>
                    </Select>
                  </DivSelect>
                </DivBaseSelectTop2>
              </div >
              <div
                style={{
                  width: "100%",
                  justifyContent: "flex-end",
                  display: "grid",
                }}
              >
                <DivBaseSelectTop2 style={{ background: "#E8FFE3" }}>
                  <DivTitleSelect>
                    <SpanSelect>Valor Total do Empréstimo:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="R$1.000,00" type="text" name="valor_total" value={pedidoEmprestimo?.valorDesejado} disabled={true} />
                  </DivSelect>
                </DivBaseSelectTop2>
                <DivBaseSelectTop2>
                  <DivTitleSelect>
                    <SpanSelect>Valor da parcela:</SpanSelect>
                  </DivTitleSelect>
                  <DivSelect>
                    <Input placeholder="R$1.000,00" type="text" name="valor_parcela" value={pedidoEmprestimo?.valorDesejado} disabled={true} />
                  </DivSelect>
                </DivBaseSelectTop2>
              </div>
            </div >
            <SpanTipoContrato>Escolha o tipo de contrato:</SpanTipoContrato>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div style={{ width: "100%", display: "flex", paddingRight: 20 }}>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                >
                  <SpanButtonValorDesejado>Automático</SpanButtonValorDesejado>
                </ButtonValorDesejado>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                  disabled={true}
                  style={{ background: "#ffffff" }}
                >
                  <SpanButtonValorDesejado style={{ color: "#228a95" }}>
                    Manual
                  </SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </div>
              <div style={{ width: "100%", display: "grid", paddingLeft: 20 }}>
                <ButtonValorDesejado
                  onClick={handleClick}
                >
                  <img
                    src={Checkmark}
                    width={25}
                    height={25}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  <SpanButtonValorDesejado>Concluir</SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </div>
            </div>

            <div>
              <DivTable>
                {rateTable.map((item) => (
                  <React.Fragment key={item.id}>
                    <TitleNameTable>{item.name}</TitleNameTable>
                    <div style={{ display: "flex" }}>
                      <Table>
                        <tr>
                          <TableColTitle>Parcela</TableColTitle>
                          <TableColTitle>Juros da Parcela</TableColTitle>
                          <TableColTitle>Valor Parcela</TableColTitle>
                          <TableColTitle>Valor Total</TableColTitle>
                          <TableColTitle>Comissão Parceiro</TableColTitle>
                        </tr>

                        {item.installments.map((item2) => (
                          <tr>
                            <TableColItem>{item2.installments}</TableColItem>
                            <TableColItem>
                              {item2.installmentInterest}%
                            </TableColItem>
                            <TableColItem>
                              R${item2.installmentValue}
                            </TableColItem>
                            <TableColItem>R${item2.fullValue}</TableColItem>
                            <TableColItem>R${item2.comission}</TableColItem>
                          </tr>
                        ))}
                      </Table>
                    </div>
                  </React.Fragment>
                ))}
              </DivTable>
            </div>
          </ContainerDiv >
        </ContainerLg >
      </ContainerBorrowed4 >
    </React.Fragment >
  );
};

export default Borrowed4;