import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Api from '../../services/api.json';
import { useAuth } from '../../context/context2';

import {
  Header,
  Title,
} from '../../components';

import {
  BottomBar,
  ButtonValorDesejado,
  ContainerLg,
  ContainerLg1,
  TableContainer,
  TableContainerDiv,
  InputRadio,
  DivCalculo,
  DivTable,
  DivValueAndButton,
  InputValorDesejado,
  SimulationContainer,
  SpanBottomBar,
  SpanButtonValorDesejado,
  Table,
  TableColItem,
  TableColTitle,
  TitleNameTable,
  TitleValorDesejado,
  ValorDesejado,
  DivButtom,
  DivGeneral
} from './styles';

type Porps = {};

const Simulation = (props: Porps) => {
  const { dadosEmprestimo, pedidoEmprestimo } = useAuth()
  const [arr, setArr] = useState(pedidoEmprestimo)
  const [loading, setLoading] = useState(true)

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

  const [inputValue, setInputValue] = useState("");
  const [activeBar, setActiveBar] = useState(false);
  const [lineId, setLineId] = useState(0);
  const [selectTable, setSelectTable] = useState(0);
  const [rateTable, setRateTable] = useState<RatetableModel[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.currentTarget.value)
    setInputValue(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setActiveBar(false);
    }
  };

  const calcular = () => {
    if (inputValue === "") {
      console.log("Informe um valor");
    } else if (Number(inputValue) < 300) {
      console.log("menor que 300");
    } else if (Number(inputValue) > 10000) {
      console.log("maior que 10000");
    } else {
      console.log("valor permitido para emprestimos");
      // console.log(Api.rateTable)
      const data: object = Api.rateTable;

      console.log(data);
      setRateTable(Object(Api.rateTable));
    }
  };
  const activeLineTable = {
    cursor: "pointer",
    background: "#EFDF4B",
  };
  const noActiveLineTable = {
    cursor: "pointer",
    background: "#fff",
  };

  interface item {
    id: number;
    installments: number;
    installmentInterest: number;
    installmentValue: number;
    fullValue: number;
    comission: number;
  };

  const selectTableLine = (item: item, item2: RatetableModel) => {
    // setLineColor(true);
    // console.log("Os itens");
    // console.log(item);

    setLineId(item.id);
    setSelectTable(item2.id);
    // setTableData(item2)

    // const obj:tableData = {
    //   tableName: item2.name,
    //   installmentsNumber: item.installmentInterest,
    //   installmentValue: item.installmentValue,
    // }
    interface Emprestimo {
      idTabela: number,
      nameTabela: string,
      quantParcelas: number,
      valorParcelas: number,
      jurosParcelas: number,
      comissao: number,
      valorDesejado: number,
    }

    let obj: Emprestimo = {
      idTabela: item2.id,
      nameTabela: item2.name,
      quantParcelas: item.installments,
      valorParcelas: item.installmentValue,
      jurosParcelas: item.installmentInterest,
      comissao: item.comission,
      valorDesejado: Number(inputValue)
    }

    dadosEmprestimo(obj);
    setArr(obj);
    setActiveBar(true);
    setLoading(false);
    // console.log("Dados")
    // console.log(pedidoEmprestimo)
    // setName(item2.name)
    // console.log("Nome")
    // console.log(name)
  };

  const history = useHistory();
  const handleClick = () => history.push('/borrowed-first');

  return (
    <React.Fragment>
      <Header />
      <SimulationContainer>
        <ContainerLg>
          <DivGeneral>
            <Title />
            <DivCalculo>
              <TitleValorDesejado>Valor Desejado</TitleValorDesejado>
              <DivValueAndButton>
                <InputValorDesejado>
                  <ValorDesejado
                    placeholder="R$ 0,00"
                    type="text"
                    name="valor_desejado"
                    onChange={handleChange}
                    value={inputValue}
                  />
                </InputValorDesejado>
                <DivButtom>
                  <ButtonValorDesejado
                    onClick={(event: React.MouseEvent<HTMLElement>) => calcular()}
                  >
                    <SpanButtonValorDesejado>Calcular</SpanButtonValorDesejado>
                  </ButtonValorDesejado>
                </DivButtom>

              </DivValueAndButton>
            </DivCalculo>
            <DivTable>
              {rateTable.map((item) => (
                <React.Fragment key={item.id}>
                  <TitleNameTable>{item.name}</TitleNameTable>
                  <TableContainer style={{ display: "flex" }}>
                    <TableContainerDiv>
                      <InputRadio
                        type="radio"
                        style={{ margin: "auto 20px auto 20px" }}
                        checked={selectTable === item.id}
                        value={item.id}
                      />
                    </TableContainerDiv>
                    <Table>
                      <tr>
                        <TableColTitle>Parcela</TableColTitle>
                        <TableColTitle>Juros da Parcela</TableColTitle>
                        <TableColTitle>Valor Parcela</TableColTitle>
                        <TableColTitle>Valor Total</TableColTitle>
                        <TableColTitle>Comissão Parceiro</TableColTitle>
                      </tr>
                      {item.installments.map((item2) => (
                        <tr
                          onClick={() => selectTableLine(item2, item)}
                          style={
                            lineId === item2.id
                              ? activeLineTable
                              : noActiveLineTable
                          }
                        >
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
                  </TableContainer>
                </React.Fragment>
              ))}
            </DivTable>
          </DivGeneral>
        </ContainerLg>
        {activeBar === true ? (
          <BottomBar>
            <ContainerLg1>
              <SpanBottomBar>
                Nome: {arr?.nameTabela} Parcelas: {arr?.quantParcelas} Valor da Parcela: R${arr?.valorParcelas}
              </SpanBottomBar>
              <ButtonValorDesejado onClick={handleClick}>
                <SpanButtonValorDesejado>Enviar</SpanButtonValorDesejado>
              </ButtonValorDesejado>
            </ContainerLg1>
          </BottomBar>
        ) : (
            <></>
          )}
      </SimulationContainer>
    </React.Fragment>
  );
};

export default Simulation;