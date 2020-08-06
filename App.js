import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MobileNumber from './src/screens/MobileNumber'
import Otp from './src/screens/Otp'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Dashboard from './src/screens/Dashboard'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductDetails from './src/screens/ProductDetails'
import CartDetails from './src/screens/CartDetails'
import Payment from './src/screens/Payment'

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
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerLeft: () => (
              <Icon name="menu" size={30} color="#fff" style={{ paddingLeft: 15 }} />
            ),
            headerRight: () => (
              <Icon name="ios-cart" size={25} color="#fff" style={{ paddingRight: 15 }} />
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
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
          }}
        />

        <Stack.Screen name="CartDetails" component={CartDetails}
          options={{
            title: "Cart Detail",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
          }}
        />

        <Stack.Screen name="Payment" component={Payment}
          options={{
            title: "Payment",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 23
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
