import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FAB } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';


function ProductDetails({ navigation, route }) {

    const [isVisible, setIsVisible] = useState(true)
    const [isQuantity, setIsQuantity] = useState(0)

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


    const storeData = async () => {
        try {
            await AsyncStorage.setItem(`${route.params.prdName}`, JSON.stringify(
                [{
                    pid: route.params.id,
                    pname: route.params.prdName,
                    pimage: route.params.prdImage,
                    pprice: route.params.prdPrice
                }]
            ))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 0.8, flexDirection: 'row' }}>
                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: route.params.prdImage }} style={{ width: 110, height: 110, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{route.params.prdName}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 5 }}>Price : {route.params.prdPrice}</Text>
                    <Text style={{ fontSize: 13, color: '#888', fontWeight: 'bold', paddingLeft: 5 }}>Discount : {route.params.prdDiscount}</Text>
                    {
                        isVisible ?
                            <TouchableOpacity style={{ backgroundColor: 'orange', width: 90, height: 30, borderRadius: 5, marginTop: 20, marginLeft: 80 }} onPress={() => { storeData(); setIsVisible(false) }}>
                                <Text style={{ textAlign: 'center', paddingTop: 6 }}>ADD</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ width: 100, flexDirection: 'row', marginLeft: 80, marginTop: 20, justifyContent: 'space-evenly' }}>
                                <FontAwesome
                                    name="minus-square"
                                    size={25}
                                    color='#DC3545'
                                    onPress={() => decrementQty()}
                                />
                                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 17 }}>{isQuantity}</Text>
                                <FontAwesome
                                    name='plus-square'
                                    size={25}
                                    color='#28A745'
                                    onPress={() => incrementQty()}
                                />
                            </View>
                    }

                </View>
            </View>
            <View style={{ flex: 1.5, }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10, paddingVertical: 10 }}>Description :</Text>
                <Text style={{ paddingHorizontal: 10, fontSize: 12, color: '#888', }}>{route.params.prdDescription}</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end', paddingRight: 20 }}>
                <FAB
                    style={{ backgroundColor: 'orange' }}
                    icon="cart"
                    color="#fff"
                    onPress={() => navigation.navigate('CartDetails')}
                />
            </View>

        </View>
    )
}

export default ProductDetails
