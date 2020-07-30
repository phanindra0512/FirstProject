
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, TextInput, Button, Colors } from "react-native-paper";
import { Icon } from "react-native-elements";
function Otp({ navigation }) {
    const [isMobile, setIsMobile] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', }}>
            <View style={{ flex: 0.4, backgroundColor: '#fff', marginHorizontal: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15, bottom: 0, left: 0, right: 0, height: 230, position: 'absolute' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>Verification</Text>
                <View style={{ flex: 0.5, marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: 250 }}
                            keyboardType="number-pad"
                            label="Enter OTP"
                            value={isMobile}
                            mode="outlined"
                            dense
                            onChangeText={isMobile => setIsMobile(isMobile)}
                        />
                    </View>
                    <Icon raised
                        containerStyle={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}
                        name='heartbeat'
                        type='font-awesome'
                        size={20}
                        reverse
                        color='orange'
                        onPress={() => navigation.navigate('Login')} />
                </View>
            </View>
        </View>
    )
}

export default Otp
