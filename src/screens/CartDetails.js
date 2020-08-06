import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import AsyncStorage from '@react-native-community/async-storage'
import { Divider, Button as Button1 } from 'react-native-paper'
import CartItems from '../components/CartItems'


function CartDetails({ navigation }) {

    const [isQuantity, setIsQuantity] = useState(0)

    const [visible, setVisible] = useState(false);

    // const toggleOverlay = () => {
    //     setVisible(!visible);
    // };

    const showOverlay = () => {
        setVisible(true)
    }

    const hideOverlay = () => {
        setVisible(false)
    }

    const incrementQty = () => {
        const value = isQuantity
        setIsQuantity(value + 1)
    }

    const decrementQty = () => {
        if (isQuantity - 1 > -1) {
            const value = isQuantity
            setIsQuantity(value - 1)
        }
    }

    const pic = 'data:image/png;base64,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'


    useEffect(() => {
        const getProductData = async () => {
            try {
                await AsyncStorage.multiGet(['Sugar', 'Chilly Powder', 'Aata']).then(res => {
                    // console.log('getting from resp1', res[0][1])
                    // console.log('getting from resp2', res[1][1])
                    // console.log('getting from resp3', res[2][1])

                })
            } catch (err) {
                console.log(err)
            }
        }
        getProductData();

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <CartItems />
                <CartItems />
                <CartItems />
            </ScrollView>
            <View>
                <Button title="CHECKOUT" buttonStyle={{ backgroundColor: 'orange' }} onPress={showOverlay} />
            </View>

            <Overlay
                isVisible={visible}
                onBackdropPress={hideOverlay}
                animationType="none"
            >
                <View style={{ width: 230, height: 220, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingBottom: 10 }}>Order Summary</Text>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <View style={{ flex: 0.15, flexDirection: 'row' }}>
                        <View style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10 }}>Order Items</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}> 3 </Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.15, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10 }}>Sub total</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'\u20B9'} 100 </Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.2, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 10, color: '#888' }}>Delivery charges</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#888' }}>{'\u20B9'} 50 </Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <View style={{ flex: 0.2, flexDirection: 'row', marginTop: 10, }}>
                        <View style={{ flex: 0.5, justifyContent: 'center', }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 10, }}>Total</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', }}>{'\u20B9'} 150 </Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'flex-end' }}>
                        <Button1 style={{ backgroundColor: 'orange', }} labelStyle={{ color: '#fff', fontSize: 15 }} onPress={() => { hideOverlay(); navigation.navigate('Payment') }}>PROCEED</Button1>
                    </View>


                </View>


            </Overlay>

        </View>
    )
}

export default CartDetails
