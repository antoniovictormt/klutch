import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  EnvelopSerie,
  PlusCicle
} from '../../../assets';

import Api from "../../../services/api.json";
import { cpfMask } from "../mask";

import {
  Header
} from '../../../components';

import {
  BoxBuscaCliente,
  ButtonSolicitar,
  ButtonValorDesejado,
  ContainerLg,
  DivCalculo,
  DivImg,
  DivValueAndButton,
  Img,
  InputValorDesejado,
  LabelButton,
  LabelCPF,
  LabelCliente,
  LabelTitle,
  SpanButtonValorDesejado,
  Title,
  TitleValorDesejado,
  ValorDesejado,
  ContainerBorrowed1
} from './styles';

type Porps = {};

const Borrowed1 = (props: Porps) => {

  interface ClientModel {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: [
      {
        label: string;
        accountTypeLabel: string;
        accountNumber: string;
      }
    ];
  }

  const [inputValue, setInputValue] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);
  const [found, setFound] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [client, setClient] = useState<ClientModel[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
    setInputValue(cpfMask(e.target.value));
  };

  const history = useHistory();
  const handleClick = () => history.push('/borrowed-second');

  const search = () => {
    var str: string = inputValue.replace(/[^\d]+/g, "");
    if (str === "") {
      setFound(true);
      setEmpty(true);
    } else {
      const arr = Api.client;
      let client = arr.filter((item) => {
        return item.cpf === str;
      });

      if (client.length > 0) {
        setActiveStatus(true);
        setEmpty(false);
        setFound(true);
        setClient(Object(client));
        console.log("Context User")
      } else {
        setEmpty(false);
        setFound(false);
        setActiveStatus(false);
      }
    }
  };
  const Result = (item: ClientModel) => {
    return (
      <BoxBuscaCliente key={item.id}>
        <LabelTitle>Cliente encontrado:</LabelTitle>
        <LabelCPF>{cpfMask(item.cpf)}</LabelCPF>
        <LabelCliente>{item.name}</LabelCliente>
        <ButtonSolicitar onClick={handleClick}>
          <LabelButton>Solicitar</LabelButton>
        </ButtonSolicitar>
      </BoxBuscaCliente>
    );
  };
  const Result2 = () => {
    if (empty === true && found === true) {
      return (
        <BoxBuscaCliente style={{ padding: "30px 0 50px 0" }}>
          <LabelTitle>Informe o CPF!</LabelTitle>
        </BoxBuscaCliente>
      );
    }
    if (empty === false && found === false) {
      return (
        <BoxBuscaCliente style={{ padding: "30px 0 50px 0" }}>
          <LabelTitle>Cliente não encontrado!</LabelTitle>
        </BoxBuscaCliente>
      );
    } else {
      return <></>;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <ContainerBorrowed1>
        <ContainerLg>
          <div style={{ display: "grid", width: "100%" }}>
            <DivImg>
              <Img src={PlusCicle} alt="" />
              <Img src={EnvelopSerie} alt="" />
              <div style={{ width: 300 }}>
                <Title>Solicitar Emprestimo</Title>
              </div>
            </DivImg>
            <DivCalculo>
              <TitleValorDesejado>Busque o Cliente</TitleValorDesejado>
              <DivValueAndButton>
                <InputValorDesejado>
                  <ValorDesejado
                    placeholder="Digite o CPF"
                    type="text"
                    maxLength={14}
                    name="documentId"
                    // value={documentId}
                    onChange={handleChange}
                    value={inputValue}
                  />
                </InputValorDesejado>
                <ButtonValorDesejado
                  onClick={(event: React.MouseEvent<HTMLElement>) => search()}
                >
                  <SpanButtonValorDesejado>Buscar</SpanButtonValorDesejado>
                </ButtonValorDesejado>
              </DivValueAndButton>
              {activeStatus === true
                ? client.map((item) => Result(item))
                : Result2()}
            </DivCalculo>
          </div>
        </ContainerLg>
      </ContainerBorrowed1>
    </React.Fragment>
  );
};

export default Borrowed1;