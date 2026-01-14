import { Image, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import { ContainerBG, ContainerContent, Overlay, } from '../../../styles/global.styles';
import { ButtonBack, H1, InfosContainer, NameText, TypeText, } from './stylesInfos';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'InfosPokemon'>;
type RouteProps = RouteProp<RootStackParamList, 'InfosPokemon'>;

export default function InfosPokemonComponent() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { id } = route.params;

  return (
    <ContainerBG
      source={require('../../../assets/images/bgPokemonGo.jpeg')}
      resizeMode="cover"
    >
      <Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />
      <ContainerContent>
        <H1>id: {id}</H1>

        <Image
          source={require('../../../assets/images/response.png')}
          resizeMode="contain"
          style={{ width: '70%', height: 250 }}
        />

        <InfosContainer>
          <NameText>Nome: ARBOK</NameText>
          <TypeText>Type: Poison</TypeText>

          <ButtonBack onPress={() => navigation.navigate('Home')}>
            <Text>Voltar</Text>
          </ButtonBack>
        </InfosContainer>
      </ContainerContent>
    </ContainerBG>
  );
}