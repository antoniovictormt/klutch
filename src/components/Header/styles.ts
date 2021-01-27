import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background: var(--background-blue);  
    
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBar = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  margin-left: 20px;
`;

export const Menu = styled.div`  
  width: 45px; 
  height: 36px; 
  justify-content: space-between; 
  display: grid; 
  align-items: center;
`;

export const MenuBar = styled.div`
  width: 45px;
  height: 5px;
  background: var(--background-white);
`;

export const LogoContainer = styled.div`  
 width: 100%; 
 justify-content: center; 
 display: flex; 
 align-items: center;
`;
