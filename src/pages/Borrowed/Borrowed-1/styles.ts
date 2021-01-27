import styled from 'styled-components';

export const ButtonSolicitar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue-primary) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 80px;

  :hover{
    background: var(--background-blue-secundary);
  }
`;

export const LabelButton = styled.span`
  font-size: var(--font-size-32);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-white);
`;

export const LabelCliente = styled.label`
  margin: 20px auto auto;
  font-size: 30px;
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const LabelCPF = styled.label`
  margin: 20px auto auto;  
  font-size: 30px;
  color: var(--color-orange-primary);
  text-align: center;

`;
export const LabelTitle = styled.label`
  margin: 20px auto auto;  
  font-size: 30px;
  color: var(--color-gray-primary);
  text-align: center;
`;

export const BoxBuscaCliente = styled.div`
  width: 100%;
  background: var(--background-gray);
  border-radius: 5px;
  margin-top: 40px;
  display: grid;
  justify-content: center;
  text-align: center;
`;
export const SpanButtonValorDesejado = styled.span`
  font-size: var(--font-size-32);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-white);
`;

export const ContainerBorrowed1 = styled.div`
  width: 100%;
  background: var(--color-background-white);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ContainerLg = styled.div`
  width: 100%;
  max-width: 1140px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

export const DivImg = styled.div`
  margin-top: 50px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;
`;

export const DivCalculo = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Title = styled.span`  
  font-size: 50px;
  font-weight: bold;
  color: var(--color-blue-primary);
  text-align: left;
  letter-spacing: 0px;
`;

export const TitleValorDesejado = styled.span`
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: var(--font-size-35);  
  font-weight: normal;
  color: var(--color-blue-primary);
  text-align: center;
`;

export const DivValueAndButton = styled.div`
  display: flex;
  align-items: center;
`;

export const InputValorDesejado = styled.div`
  /* width: 300px; */
  height: 54px;
  background: var(--background-gray);
  border-radius: 5px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ValorDesejado = styled.input`
  font-size: var(--font-size-32);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-gray-primary);
  text-align: center;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--background-gray);
  width: 300px;
  height: 54px;
  border-radius: 5px;
`;

export const ButtonValorDesejado = styled.div`
  width: 120px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue-primary) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  cursor: pointer;

  :hover{
    background: var(--background-blue-secundary);
  }
`;
