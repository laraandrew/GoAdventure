import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from './app/screens/SplashScreen';
import InputScreen from './app/screens/InputScreen';
import ResultsScreen from './app/screens/ResultsScreen';
import { RootStackParamList } from './app/utils/types';
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';

const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
          options={{ title: 'Enter Trip Details' }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ title: 'Trip Weather Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
