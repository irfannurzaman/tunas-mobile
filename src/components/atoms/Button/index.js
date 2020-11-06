import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
const Button = ({color, width, label}) => {
    return (
        <TouchableOpacity style={styles.container(color, width)}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (color, width) => ({
        backgroundColor: color,
        paddingVertical: hp('1%'),
        alignItems: 'center',
        width: hp(width)
    }),
    text: {
        color: 'white'
    }
})

export default Button