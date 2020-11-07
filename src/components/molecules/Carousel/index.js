import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
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
        height: '90%',
        position: 'absolute'
    },
    header1 : {
        backgroundColor: '#72cff7',
        height: '60%',
        width: '90%',
        borderRadius: 20
    },
})