import { Logo } from '../../assets';

import {
  Container,
  ContainerBar,
  Menu,
  MenuBar,
  LogoContainer
} from "./styles";

export default function Header() {
  return (
    <Container>
      <ContainerBar>
        <Menu>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </Menu>
        <LogoContainer>
          <img src={Logo} alt="klutch tecnologia" />
        </LogoContainer>
      </ContainerBar>
    </Container>
  )
};
