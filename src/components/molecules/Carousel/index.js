import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const window = Dimensions.get("window")
const Carousel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header1}/>
        </View>
    )
}
export default Carousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: window.height / 2.3,
        position: 'absolute'
    },
    header1 : {
        backgroundColor: '#72cff7',
        height: hp('27%'),
        width: wp('90%'),
        borderRadius: 20
    },
})