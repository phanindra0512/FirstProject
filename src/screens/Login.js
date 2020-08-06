import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Card, TextInput, Button, Colors } from "react-native-paper";
import { Icon } from "react-native-elements";

function Login({ navigation }) {
    const [isMobile, setIsMobile] = useState('')
    const [isPassword, setIsPassword] = useState('')


    return (
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'flex-end' }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVzK7sdPteCWw9eLGbQyL0cl_kazsbSnvbHQ&usqp=CAU" }} style={{ width: 100, height: 100, borderRadius: 100 }} />
            </View>
            <View style={{ flex: 0.4, backgroundColor: '#fff', marginHorizontal: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15, bottom: 0, left: 0, right: 0, height: 350, position: 'absolute' }}>
                <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Login</Text>
                </View>
                <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TextInput
                        style={{ width: 250 }}
                        keyboardType="number-pad"
                        label="Mobile Number"
                        value={isMobile}
                        mode="outlined"
                        dense
                        onChangeText={isMobile => setIsMobile(isMobile)}
                    />
                </View>

                <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        style={{ width: 250 }}
                        secureTextEntry
                        label="Password"
                        value={isPassword}
                        mode="outlined"
                        dense
                        onChangeText={isPassword => setIsPassword(isPassword)}
                    />
                </View>

                <View style={{ flex: 0.3, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', paddingRight: 30 }}>Forgot password ?</Text>
                </View>

                <View style={{ flex: 0.6, alignItems: 'flex-end', paddingRight: 20 }}>
                    <Icon raised
                        // disabled={isMobile == "" || isPassword == "" ? true : false}
                        // containerStyle={{}}
                        name='arrow-forward'
                        type='Ionicons'
                        reverse
                        size={20}
                        color='orange'
                        // onPress={() => onSubmit()}
                        onPress={() => navigation.navigate('Dashboard')}
                    />
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Don't have an account ? </Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'orange' }} onPress={() => navigation.navigate('MobileNumber')}>Signup</Text>
                </View>



            </View>

        </View>
    )
}

export default Login
