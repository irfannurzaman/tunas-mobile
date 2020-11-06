import React, {useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const HamburgerMenu = ({navigation}) => {
    return (
        <TouchableOpacity 
          style={styless.xi} 
          onPress={() => navigation.openDrawer()}>
            <View style={styless.xii('0%')}/>
            <View style={styless.xii('0.4%')}/>
            <View style={styless.xii('0.4%')}/>
        </TouchableOpacity>
    )
}

const styless = StyleSheet.create({
    xi: {
        height: hp('3%'),
        width: wp('6%'),
        borderWidth: wp('0.6%'),
        borderRadius: wp('50%'),
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    xii :(e) =>  ({
        borderBottomWidth: wp('0.4%'),
        width: wp('3%'),
        borderColor: 'white',
        marginTop: hp(e)
    })
})

export default HamburgerMenu