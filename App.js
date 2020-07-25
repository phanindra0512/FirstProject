import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MobileNumber from './src/screens/MobileNumber'
import Otp from './src/screens/Otp'
import Login from './src/screens/Login'


const Stack = createStackNavigator()


function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName={MobileNumber}>
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
