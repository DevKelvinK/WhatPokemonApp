import { Image, Text } from 'react-native';

import {
  ContainerBG,
  ContainerContent,
  Overlay,
} from '../../styles/global.styles';
import {
  ButtonBack,
  H1,
  InfosContainer,
  NameText,
  TypeText,
} from './stylesInfos';

type Props = {
  onBackHome: () => void;
};

export default function InfosPokemonComponent( ) {
  return (
    <ContainerBG
      source={require('../../assets/images/bgPokemonGo.jpeg')}
      resizeMode="cover"
    >
      <Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} />
      <ContainerContent>
        <H1>id: 24</H1>

        <Image
          source={require('../../assets/images/response.png')}
          resizeMode="contain"
          style={{ width: '70%', height: 250 }}
        />

        <InfosContainer>
          <NameText>Nome: ARBOK</NameText>
          <TypeText>Type: Poison</TypeText>

          <ButtonBack>
            <Text>Voltar</Text>
          </ButtonBack>
        </InfosContainer>
      </ContainerContent>
    </ContainerBG>
  );
}
