import styled from 'styled-components';

export const ContainerBorrowed4 = styled.div`
  width: 100%;
  background: var(--background-white);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ContainerDiv = styled.div`
  display: grid;
  width: 100%;
`;

export const SpanTipoContrato = styled.span`
  font-size: var(--font-size-32);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: left;
`;

export const Input = styled.input`
  font-size: var(--font-size-18);
  color: var(--color-orange-secundary);
  font-style: var(--font-style-italic);
  font-weight: var(--font-weight-bold);
  text-align: center;
  border-width: 0px;
  border: none;
  box-shadow: none;
  outline: none !important;
  background: var(--background-white);
  width: 200px;
  height: 60px;
  border-radius: 5px;
  padding: 0 20px 0 20px;
`;

export const SelectOption = styled.option`
  font-size: 22px;
  background: var(--background-white);
  font-size: var(--font-size-18);
`;

export const Select = styled.select`
  color: var(--color-orange-primary);
  padding: 0 10px 0 10px;
  width: 200px;
  height: 60px;
  font-size: var(--font-size-18);
  background: var(--background-white);
  border: none;
  box-shadow: none;
  outline: none !important;
  color: var(--color-orange-primary);
  font-style: var(--font-style-italic);
  font-weight: var(--font-weight-bold);
`;

export const DivSelect = styled.div`
  align-items: center;
  display: flex;
  height: 96;
  margin-right: 20px;
  padding: 20px 0 20px 20px;
`;

export const DivTitleSelect = styled.div`
  margin: 0 40px 0 30px;
  align-items: center;
  display: flex;
`;

export const SpanSelect = styled.span`
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-primary);
`;

export const DivBaseSelectTop = styled.div`
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  width: 472px;
  justify-content: space-between;
`;

export const DivBaseSelectTop2 = styled.div`
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SpanButtonValorDesejado = styled.span`
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--background-white);
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
  justify-content: space-between;
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

export const ButtonValorDesejado = styled.button`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue-primary);
  border-radius: 5px;
  cursor: pointer;
  border: none !important;
  outline-style: none;
  
  transition: 0.2s;

  :hover {
    background: var(--color-blue-secundary);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  width: 100%;
`;

export const TableColTitle = styled.th`
  font-size: var(--font-size-25);
  letter-spacing: var(--character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;
  border: 1px solid var(--border-color);
  padding: 8px;
`;

export const TableColItem = styled.td`  
  font-size: var(--font-size-25);
  letter-spacing: var(--character-spacing-0);
  color: var(--unnamed-color-777777);
  text-align: center;
  border: 1px solid var(--border-color);
  padding: 8px;
`;

export const TitleNameTable = styled.div`
  margin: 30px auto 30px auto;  
  font-size: var(--font-size-25);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const DivTable = styled.div`
  margin-top: 50px;
  width: 100%;
  background: var(--background-white) 0% 0% no-repeat padding-box;
  justify-content: center;
`;
