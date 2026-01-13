import { NavigationContainer } from '@react-navigation/native';
import ScreenRoutes from './screen.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <ScreenRoutes/>
    </NavigationContainer>
  );
}