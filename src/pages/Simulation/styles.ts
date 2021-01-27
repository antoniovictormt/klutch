import styled from 'styled-components';

export const SimulationContainer = styled.div`
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

export const ContainerDisplay = styled.div`
  display: grid;
  width: 100%;
`;

export const DivCalculo = styled.div`
  width: 100%;
  align-items: center; 
  display: grid;
  justify-content: center;
`;

export const TitleValorDesejado = styled.span`
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: var(--font-size-35);   
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const DivValueAndButton = styled.div`
  display: flex;
  align-items: center;
`;

export const InputValorDesejado = styled.div`
  width: 470px;
  height: 60px;
  background: var(--background-white) ;
  border-radius: 5px;
  text-align: center;    
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 40px;
`;

export const ValorDesejado = styled.input`
  font-size: 30px;
  color: var(--color-gray-primary);
  text-align: center;
  border-width:0px;
  border:none;
  box-shadow: none;
  outline:none!important;
  background: var(--background-white) ;
  width: 470px;
  height: 60px;
  border-radius: 5px;
`;

export const ButtonValorDesejado = styled.div`
  width: 160px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-orange) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  cursor: pointer;  

  transition: 0.2s;

  :hover{
    background: var(--background-orange-secundary);
  }
`;

export const DivTable = styled.div`
  margin-top: 50px;    
  width: 100%;
  background: var(--background-white) 0% 0% no-repeat padding-box;
  justify-content: center;
`;

export const TitleNameTable = styled.div`
  margin: 30px auto 30px auto;
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const TableContainer = styled.div`
  display: flex;
`;

export const TableContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  background: var(--color-white);
`;

export const InputRadio = styled.input`
  margin: auto 20px auto 20px;
`;

export const DivButtom = styled.div`
  width: 100%;

  @media(max-width: 575px) {
    width: 400px;
    justify-content: center;
    display: flex;
    margin-top: 20px;
  }
`;

export const DivGeneral = styled.div`
  display: grid;
  width: 100%;

  @media(max-width: 575px) {
   justify-content: center;
   width: 400px;
  }
`;

export const SpanBottomBar = styled.span`
  font-size: var(--font-size-35);
  color: var(--color-white);
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BottomBar = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 85px;
  background: var(--color-blue-primary);
  justify-content: center;
  display: flex;
`;

export const Table = styled.table`  
  width: 95%;
  border-collapse: collapse;
`;

export const TableColTitle = styled.th`
  font-size: var(--font-size-25);
  letter-spacing: var(--character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;
  border: 1px solid #dddddd;
  background-color: var(--background-white);
  padding: 8px;
`;

export const TableColItem = styled.td`  
  font-size: var(--font-size-32);
  letter-spacing: var(--character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;
  border: 1px solid #dddddd;
  padding: 8px;
`;

export const SpanButtonValorDesejado = styled.span`  
  font-size: var(--font-size-25);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-white);
`;

export const ContainerLg1 = styled.div`
  width: 100%;
  max-width: 1140px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
