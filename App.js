import React, { useCallback, useEffect, useState } from 'react';
import {View} from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen'
import Menu from './screens/Menu'
import Profil from './screens/Profil'
import Einfach from './screens/Einfach'
import Party from './screens/Party'
import Hart from './screens/Hart'
import ownTask from './screens/ownTask'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "Overwriting fontFamily style attribute preprocessor"
]);


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function prepare() {
      try {
        // Preload fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf')
        });

     } finally {
      setTimeout(function() {setAppIsReady(true)}, 600);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <View onLayout={onLayoutRootView}/>
      <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} 
      options={{ headerShown: false
      }}/>
      <Stack.Screen name="Profil" component={Profil} 
      options={{ headerShown: false
       }}/>
        <Stack.Screen 
          name="Menu" component={Menu} 
          options={{ headerShown: false }}/>
          <Stack.Screen 
            name="Einfach" component={Einfach} 
            options={{ headerShown: false }}/>

          <Stack.Screen 
          name="Party" component={Party} 
          options={{ headerShown: false }}/>
          <Stack.Screen 
          name="Hart" component={Hart} 
          options={{ headerShown: false }}/>
          <Stack.Screen 
          name="ownTask" component={ownTask} 
          options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}