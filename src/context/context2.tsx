import React, { createContext, useState, useContext } from 'react';

import Api from '../services/api.json';
interface User {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

interface InfoEmprestimo {
  idTabela: number,
  nameTabela: string,
  quantParcelas: number,
  valorParcelas: number,
  jurosParcelas: number,
  comissao: number,
  valorDesejado: number,
}

interface Solicitations {
  id: number,
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
interface AuthContexData {
  user: User | null;
  pedidoEmprestimo: InfoEmprestimo | null;
  dadosEmprestimo(item: object): void;
  dadosUser(item: object): void;
  createSolicitation(item: object): void;
}

export const postsContextDefaultValue: AuthContexData = {
  user: null,
  pedidoEmprestimo: null,
  dadosEmprestimo: () => null,
  dadosUser: () => null,
  createSolicitation: () => null,
}

const AuthContext = createContext<AuthContexData>(postsContextDefaultValue);


export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [pedidoEmprestimo, setPedidoEmprestimo] = useState<InfoEmprestimo | null>(null)
  const [, setSolicitation] = useState<Solicitations | null>(null);
  const [arraySolicitation,] = useState(Api.solicitation);

  function dadosUser(item: User) {
    console.log("dados do User")
    console.log(item)
    setUser({
      id: item.id,
      name: item.name,
      phone: item.phone,
      cpf: item.cpf,
      bank: {
        label: item.bank.label,
        accountTypeLabel: item.bank.accountTypeLabel,
        accountNumber: item.bank.accountNumber,
      }
    })
  }
  function dadosEmprestimo(item: InfoEmprestimo) {
    setPedidoEmprestimo({
      idTabela: item.idTabela,
      nameTabela: item.nameTabela,
      quantParcelas: item.quantParcelas,
      valorParcelas: item.valorParcelas,
      jurosParcelas: item.jurosParcelas,
      comissao: item.comissao,
      valorDesejado: item.valorDesejado,
    })
  }

  function createSolicitation(item: Solicitations) {

    let f = JSON.stringify(Api.solicitation = [{
      id: 1,
      clientId: 1,
      installmentInterest: 1,
      installmentInterestValue: 1,
      comission: 1,
      comissionValue: 1,
      installmentValue: 1,
      cardNumber: "string",
      desiredValue: 1,
      totalLoan: 1,
      installmentId: 1,
      rateTableId: 1,
    }]);

    Api.solicitation.push({
      id: 1,
      clientId: 1,
      installmentInterest: 1,
      installmentInterestValue: 1,
      comission: 1,
      comissionValue: 1,
      installmentValue: 1,
      cardNumber: "string",
      desiredValue: 1,
      totalLoan: 1,
      installmentId: 1,
      rateTableId: 1,
    })

    setSolicitation(item)

    console.log("JSON")
    console.log(f)
    console.log("Solicitação1")
    console.log(arraySolicitation)
  }

  return (
    <AuthContext.Provider value={{ dadosUser, user, dadosEmprestimo, pedidoEmprestimo, createSolicitation }}>
      {children}
    </ AuthContext.Provider>
  )
}


export function useAuth() {
  const context = useContext(AuthContext)

  return context
}