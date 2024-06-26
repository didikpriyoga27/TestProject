import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import InitScreen from '../../auth/screens/InitScreen';

const Stack = createNativeStackNavigator();

export const navigationRef = React.createRef();

export default function AppNavigation() {
  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="InitScreen" component={InitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
