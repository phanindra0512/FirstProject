import React from 'react'
import { View, Text, StatusBar } from 'react-native'
function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="pink" />
      <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>This is phani</Text>
      </View>
    </View>
  )
}

export default App
