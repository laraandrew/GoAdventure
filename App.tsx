import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './app/screens/SplashScreen';
import InputScreen from './app/screens/InputScreen';
import ResultsScreen from './app/screens/ResultsScreen';
import { RootStackParamList } from './app/utils/types';

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ headerShown: false  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
