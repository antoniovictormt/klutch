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
  width: 485px;
  text-align: center;
  height: 30px;
  font-size: var(--font-size-25);
  color: var(--color-gray-primary);
`;

export const SistemDivBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
`;

export const SistemSpan = styled.span`
  color: var(--color-blue-primary);
  font-size: var(--font-size-25);
`;

export const SistemValue = styled.span`
  color: #31ac2b;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-25);
`;

export const SistemBox = styled.div`
  margin-top: 15px;
  height: 260px;
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;  
  color: var(--color-gray-primary);
  font-size: var(--font-size-25);
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
  width: 450px;
  height: 258px;
  background: var(--background-gray);
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;  
  padding: 20px;
  line-height: 30px;
  color: var(--color-gray-primary);
`;

export const FluxBoxDiv = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  margin: auto;
  line-height: 30px;
  font-size: var(--font-size-18);
  color: var(--color-gray-primary);
  font-weight: var(--font-weight-bold);
  font-style: var(--font-style-italic);
`;

export const FluxDivBox = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: start;
  align-items: flex-start;
  flex-direction: column; 
  margin-top: 5px;
  line-height: 30px;
  font-size: var(--font-size-18);
  color: var(--color-gray-primary);
  font-weight: var(--font-weight-bold);
  font-style: var(--font-style-italic);
`;

export const FluxBxDiv = styled.div`
  margin-top: 15px;
  width: 450px;
  height: 260px;
  background: var(--background-blue-third);
  border: 1px dashed var(--border-blue);
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;  
  padding: 20px;
  line-height: 30px;
  color: var(--color-gray-primary);
`;

export const DivSituation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const Waiting = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background: var(--background-orange);
  font-size: var(--font-size-18);
  width: 180px;
  height: 40px;
  color: var(--color-white);
  border-radius: 5px;
  margin-bottom: 12px;
`;

export const ApproveReprove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Approve = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background: var(--background-blue);
  font-size: var(--font-size-18);
  border-radius: 5px;
  width: 180px;
  height: 40px;
  color: var(--color-white);
`;

export const CircleDenied = styled.img`
  height: 25px;
  margin-left: 10px;
`;

export const Reprove = styled.div` 
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background: #BC3434;
  font-size: var(--font-size-18);
  border-radius: 5px;
  width: 180px;
  height: 40px;
  color: var(--color-white);
  margin-left: 15px;
`;

export const Tittle = styled.span`
  margin: auto;
  font-style: normal;
`;

export const Link = styled.a`
  color: #2D98B4;
  text-decoration: underline;
`;