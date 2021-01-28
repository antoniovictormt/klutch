import styled from 'styled-components';

export const SpanHeadForm = styled.span`
  font-size: var(--font-size-40);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
  margin-top: 40px;
`;

export const SpanTipoContrato = styled.span`
  font-size: var(--font-size-18);
  margin: 20px 0 20px 0;
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const SpanTipoContrato2 = styled.span`  
  font-size: var(--font-size-18);
  margin: 20px 0 0 0;
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: left;
`;

export const DivTitleSelect = styled.div`
  margin: 0 40px 0 30px;
  align-items: center;
  display: flex;
  margin: auto;
`;

export const SpanName = styled.span`  
  font-size: var(--font-size-18);
  font-style: var(--font-style-italic);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-primary);
  margin-right: 10px;
`;

export const SpanSelect = styled.span`
  font-size: var(--font-size-18);
  font-style: var(--font-style-italic);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-primary);
  margin-right: 10px;
`;

export const DivBaseSelectTop2 = styled.div`
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SpanButtonValorDesejado = styled.span`  
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-white);
`;

export const Wrapper = styled.div`
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
  background: var(--background-blue);
  border-radius: 5px;
  cursor: pointer;
  border: none !important;
  outline-style: none;  
  
  transition: 0.2s;

  :hover {
    background: var(--color-blue-secundary);
  }
`;
