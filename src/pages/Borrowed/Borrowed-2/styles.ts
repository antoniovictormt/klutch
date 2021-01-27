import styled from "styled-components";

export const SpanInfo = styled.span`
  font-size: var(--font-size-18);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-gray-primary);
  text-align: left;
`;

export const Divisor = styled.div`
  margin: 20px 0 20px 0;
`;

export const SpanDivisor = styled.span`
  font-size: var(--font-size-18);
  color: var(--color-gray-primary);
`;

export const SpanButtonValorDesejado = styled.span`
  font-size: var(--font-size-25);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-white);
`;

export const ContainerBorrowed2 = styled.div`
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

export const ContainerLg = styled.div`
  width: 100%;
  max-width: 1140px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const DivImg = styled.div`
  margin-top: 50px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: left;
`;

export const Title = styled.span`  
  font-size: 50px;
  font-weight: bold;
  color: var(--color-blue-primary);
  text-align: left;
  letter-spacing: 0px;
`;

export const DivCalculo = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
`;

export const TitleValorDesejado = styled.span`
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: var(--font-size-40);
  letter-spacing: var(--character-spacing-0);
  color: var(--color-blue-primary);
  text-align: center;
`;

export const DivValueAndButton = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
`;

export const ButtonValorDesejado = styled.button`
  width: 300px;
  height: 54px;
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

  :disabled {
    background: var(--color-blue-primary);
    opacity: 0.4;
    cursor: text;
  }
`;