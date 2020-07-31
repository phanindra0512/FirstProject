import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MobileNumber from './src/screens/MobileNumber'
import Otp from './src/screens/Otp'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Dashboard from './src/screens/Dashboard'
import { Icon } from 'react-native-elements'
import ProductDetails from './src/screens/ProductDetails'

const Stack = createStackNavigator()


function App() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#EF820D" />
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard}
          options={{
            title: "Home",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerLeft: () => (
              <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                reverse
                size={20}
                color='orange'
              />
            )
          }}

        />
        <Stack.Screen name="ProductDetails" component={ProductDetails}
          options={{
            title: "Product Detail",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
