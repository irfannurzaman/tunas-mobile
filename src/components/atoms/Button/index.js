import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import normalize from '../FontSize'
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
        paddingVertical: normalize(8),
        alignItems: 'center',
        width: normalize(width)
    }),
    text: {
        color: 'white'
    }
})

export default Button