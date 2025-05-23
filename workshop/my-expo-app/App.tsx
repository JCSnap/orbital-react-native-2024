import './global.css';
import { View, Text } from 'react-native';
import BusTiming from 'components/bus-timing';
import BusRoutes from 'components/bus-routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'BusTiming',
  screens: {
    BusTiming: BusTiming,
    BusRoutes: BusRoutes,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
