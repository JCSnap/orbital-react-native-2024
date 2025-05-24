import { View, Text, Button, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import BusTiming from 'components/screens/bus-timing/bus-timing';
import BusRoutes from 'components/screens/bus-routes/bus-routes';
import './global.css';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const MyTabs = createBottomTabNavigator({
    screens: {
      BusTiming: BusTiming,
      BusRoutes: BusRoutes,
    },
  });

  return (
    <NavigationContainer>
      <MyTabs.Navigator>
        <MyTabs.Screen name="BusTiming" component={BusTiming} />
        <MyTabs.Screen name="BusRoutes" component={BusRoutes} />
      </MyTabs.Navigator>
    </NavigationContainer>
  );
}
