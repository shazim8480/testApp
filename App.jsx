/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './src/services/navigator/app-navigator';

function App() {
  return (
    <AppNavigator>
      <SafeAreaView>
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView> */}
      </SafeAreaView>
    </AppNavigator>
  );
}

export default App;
