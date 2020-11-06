import React from 'react'
import { StyleSheet, View } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const About = () => {
    return (
        <View style={styless.container}>
            <View style={styless.header}></View>
        </View>
    )
}
export default About
const styless = StyleSheet.create({
    container: {
            borderTopLeftRadius: 90,
            borderTopRightRadius: 90,
            backgroundColor: '#689df2', 
            height: hp('25%'), 
            width: '100%',
            flexDirection: 'row',
            marginTop: hp('5%'),
            justifyContent: 'center'
        },
        header: {
            width: wp('90%'),
            height: hp('25%'),
            backgroundColor: 'white',
            marginTop: hp('-5%'),
            borderRadius: 10
    }
})