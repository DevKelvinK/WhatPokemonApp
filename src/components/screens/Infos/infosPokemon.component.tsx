import { ActivityIndicator, Image, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import {
  ContainerBG,
  ContainerContent,
  Overlay,
} from '../../../styles/global.styles';
import {
  ButtonBack,
  H1,
  InfosContainer,
  NameText,
  ContainerOverlay,
  TypeText,
  LoadText,
} from './stylesInfos';
import { useEffect, useState } from 'react';
import { getPokemon } from '../../../services/servicesAPI';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'InfosPokemon'
>;
type RouteProps = RouteProp<RootStackParamList, 'InfosPokemon'>;

export default function InfosPokemonComponent() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { id } = route.params;

  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [msgError, setMsgError] = useState('');

  useEffect(() => {
    async function loadData() {
      // simulando um load com o setTimeout
      setTimeout(async () => {
        try {
          const data = await getPokemon(id);
          setPokemon(data);
        } catch (error) {
          if (error instanceof Error) {
            setMsgError(`${error.message}`);
          } else {
            setMsgError(String(error));
          }
        } finally {
          setLoading(false);
        }
      }, 3000);
    }
    loadData();
  }, [id]);

  return (
    <ContainerBG
      source={require('../../../assets/images/bgPokemonGo.jpeg')}
      resizeMode="cover"
    >
      <Overlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />

      {loading ? (
        <ContainerOverlay>
          <ActivityIndicator
            size="large"
            color="#006eff"
            style={{ transform: [{ scale: 1.5 }] }}
          />
          <LoadText>Carregando...</LoadText>
        </ContainerOverlay>
      ) : msgError ? (
        <ContainerOverlay>
          <Text style={{ color: 'red', fontSize: 14 }}>{msgError}</Text>
          <Text
            style={{
              color: 'red',
              marginTop: 14,
              textAlign: 'center',
              fontSize: 18,
              width: '70%',
            }}
          >
            Pokemon não encontrado, leia um QR Code valido!
          </Text>

          <ButtonBack style={{backgroundColor: '#c01e1e', color: 'white'}} onPress={() => navigation.navigate('Home')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Voltar</Text>
          </ButtonBack>
        </ContainerOverlay>
      ) : (
        <ContainerContent>
          <H1>id: {pokemon.id}</H1>

          <Image
            source={{ uri: pokemon.sprites.front_default }}
            resizeMode="contain"
            style={{ width: '100%', height: 300 }}
          />

          <InfosContainer>
            <NameText>Nome: {pokemon.name.toUpperCase()}</NameText>
            <TypeText>
              Tipo{pokemon.types.length > 1 && 's'}:{' '}
              {pokemon.types.map((t: any) => t.type.name).join(', ')}
            </TypeText>

            <ButtonBack onPress={() => navigation.navigate('Home')}>
              <Text>Voltar</Text>
            </ButtonBack>
          </InfosContainer>
        </ContainerContent>
      )}
    </ContainerBG>
  );
}