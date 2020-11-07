import React from 'react'
import { StyleSheet, View } from 'react-native'
import {normalize} from '../../atoms'

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
            height: normalize(320), 
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        header: {
            width: '90%',
            height: '45%',
            backgroundColor: 'white',
            marginTop: normalize(-20),
            borderRadius: 10
    }
})