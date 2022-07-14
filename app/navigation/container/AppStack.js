import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherList from '../screens/weatherList';
import WeatherDetails from '../screens/weatherDetails';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='WeatherList'
        component={WeatherList}
        options={{
          headerShown: false,
          title: 'Weather List',
        }}
      />
      <Stack.Screen
        name='WeatherDetails'
        component={WeatherDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
