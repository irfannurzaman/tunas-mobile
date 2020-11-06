import React from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

const Auth = ({navigation, route}) => {
    const {params} = route
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styless.header}>
            </View>
            <View 
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: hp('30%'),
                    width: '100%',
                    position: 'absolute'
                }}>
                <View style={styless.header1}>
                    {}
                </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={styless.container('8%')}>
                    <Text style={{fontSize: hp('10%')}}>{params}</Text>
                </View>
            </View>
            <View style={{width: '100%', height: hp('40%'), alignItems: 'center', marginTop: hp('4%')}}>
                <View style={{width: '100%', height: hp('40%'), justifyContent: 'flex-end'}}>
                <View style={styless.container1}/>
                </View>
                <View style={styless.header2}></View>
            </View>
        </ScrollView>
    )
}

const styless = StyleSheet.create({
    header: {
        width: '100%',
        height: hp('25%'),
        backgroundColor: '#689df2',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    header1: {
        width: wp('80%'),
        height: hp('20%'),
        backgroundColor: 'white',
        borderRadius: 10
    },
    container: (val) =>  ({
        width: wp('80%'),
        height: hp('40%'),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: hp(val),
        justifyContent: 'center',
        alignItems: 'center'
    }),
    container1: {
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        backgroundColor: '#689df2', 
        height: hp('25%'), 
        width: '100%',
        flexDirection: 'row',
        marginTop: hp('5%'),
        justifyContent: 'center'
    },
    header2: {
        width: wp('80%'),
        height: hp('28%'),
        backgroundColor: 'white',
        marginTop: hp('-2%'),
        borderRadius: 10,
        position: 'absolute'
    }
})

export default Auth