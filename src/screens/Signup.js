import React, { useState } from 'react'
import { View, Text, ScrollView, Image, KeyboardAvoidingView } from 'react-native'
import { TextInput, } from "react-native-paper";
import { Avatar, Icon } from "react-native-elements";

function Signup({ navigation }) {
    const [isFirstName, setIsFirstName] = useState('')
    const [isLastName, setIsLastName] = useState('')
    const [isEmail, setIsEmail] = useState('')
    const [isMobile, setIsMobile] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const [isConfirmPassword, setIsConfirmPassword] = useState('')


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'orange', }}>
                <View style={{ flex: 0.2, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 26, paddingLeft: 10, fontWeight: 'bold', color: '#fff' }}>Create Profile</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 15, letterSpacing: 0.3, color: '#fff', fontWeight: 'bold' }}>please create account to continue</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', marginHorizontal: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, elevation: 10 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Avatar
                            rounded
                            size="large"
                            source={{
                                uri:
                                    'https://successroute.ca/img/default.png',
                            }}
                            showEditButton
                            onPress={() => console.log("Works!")}
                            containerStyle={{ alignSelf: 'center', marginTop: 20 }}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="First Name"
                            value={isFirstName}
                            mode="outlined"
                            dense
                            onChangeText={isFirstName => setIsFirstName(isFirstName)}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="Last Name"
                            value={isLastName}
                            mode="outlined"
                            dense
                            onChangeText={isLastName => setIsLastName(isLastName)}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="Email"
                            value={isEmail}
                            mode="outlined"
                            dense
                            onChangeText={isEmail => setIsEmail(isEmail)}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="Mobile Number"
                            value={isMobile}
                            mode="outlined"
                            dense
                            onChangeText={isMobile => setIsMobile(isMobile)}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="Password"
                            value={isPassword}
                            mode="outlined"
                            dense
                            onChangeText={isPassword => setIsPassword(isPassword)}
                        />
                        <TextInput
                            style={{ width: 250, marginVertical: 10 }}
                            label="Confirm Password"
                            value={isConfirmPassword}
                            mode="outlined"
                            dense
                            onChangeText={isConfirmPassword => setIsConfirmPassword(isConfirmPassword)}
                        />
                        <Icon raised
                            containerStyle={{ alignSelf: 'flex-end', marginRight: 20 }}
                            name='arrow-forward'
                            type='Ionicons'
                            size={20}
                            reverse
                            color='orange'
                            onPress={() => navigation.navigate('Login')}
                        />
                    </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Signup
