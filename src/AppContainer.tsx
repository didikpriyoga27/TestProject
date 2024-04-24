import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import AppNavigation from './shared/navigation/AppNavigation';
import MobxProvider from './shared/providers/MobxProvider';
import Stores from './shared/stores';

enableScreens();

export default function AppContainer() {
  return (
    // @ts-ignore
    <MobxProvider store={Stores}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <StatusBar barStyle={'default'} />
          <AppNavigation />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </MobxProvider>
  );
}
