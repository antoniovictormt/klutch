import {
  EnvelopSerie,
  PlusCicle
} from '../../assets';

import {
  DivImg,
  Img,
  TitleContainer,
  Title
} from './styles'

export default function index() {
  return (
    <DivImg>
      <Img src={PlusCicle} alt="" />
      <Img src={EnvelopSerie} alt="" />
      <TitleContainer>
        <Title>Simulação de Taxas</Title>
      </TitleContainer>
    </DivImg>
  )
};
