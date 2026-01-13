import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComponent from '../components/screens/Home/home.component';
import CameraComponent from '../components/screens/Camera/camera.component';
import InfosPokemonComponent from '../components/screens/Infos/infosPokemon.component';

export type RootStackParamList = {
  Home: undefined;
  Camera: undefined;
  InfosPokemon: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ScreenRoutes() {

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen name="Camera" component={CameraComponent} />
      <Stack.Screen name="InfosPokemon" component={InfosPokemonComponent} />
    </Stack.Navigator>
  );
}
