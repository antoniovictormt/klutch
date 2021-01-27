import styled from 'styled-components';


export const ContainerDetail = styled.div`
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

export const ContainerDiv = styled.div`
    display: grid;
    width: 100%;
`;

export const DetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 50px;
  flex: 1;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;


export const Img = styled.img`
  margin-right: 20px;
`;

export const ImgEnvelop = styled.img`
  width: 60px;
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

export const SistemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  flex: 0.5;
  width: 50%;
  margin-top: 5px;
  margin: 15px;
`;

export const SistemTitle = styled.p`
  background: var(--background-gray);
  border-radius: 5px;
  width: 420px;
  text-align: center;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-18);
`;

export const SistemDivBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
`;

export const SistemSpan = styled.span`
  color: var(--color-blue-primary);
  font-size: var(--font-size-18);
`;

export const SistemValue = styled.p`
  color: #31ac2b;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-18);
`;

export const SistemBox = styled.div`
  margin-top: 15px;
  width: 200px;
  height: 200px;
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const FluxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  flex: 0.5;
  width: 50%;
  margin-top: 5px;
`;

export const FluxBox = styled.div`
  margin-top: 15px;
  width: 420px;
  height: 200px;
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;  
  padding: 20px;
`;