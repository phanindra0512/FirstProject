
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, TextInput, Button, Colors } from "react-native-paper";
import { Icon } from "react-native-elements";

function MobileNumber({ navigation }) {
    const [isMobile, setIsMobile] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', }}>
            <View style={{ flex: 0.4, backgroundColor: '#fff', marginHorizontal: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15, bottom: 0, left: 0, right: 0, height: 230, position: 'absolute' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>Mobile </Text>
                <View style={{ flex: 0.5, marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ width: 250 }}
                            keyboardType="number-pad"
                            label="Enter Mobile Number"
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
                        reverse
                        size={20}
                        color='orange'
                        onPress={() => navigation.navigate('Otp')} />


                </View>
            </View>
        </View>
    )
}

export default MobileNumber
