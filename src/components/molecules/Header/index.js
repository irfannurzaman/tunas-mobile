import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import {data_name} from './utils'
import {normalize} from '../../atoms'
const window = Dimensions.get("window")

const HeaderHome = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={{marginTop: window.height / 24, width: '100%', height: '60%',}}>
                <Text style={styles.fontSize}>Selamat Datang,</Text>
                <Text style={styles.fontSize1}>Silakan daftar untuk mendaftarkan fitur lelang</Text>
                <View 
                    style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-around', 
                        width: '100%', 
                        alignItems: 'center'}}>
                    <View style={styles.garis}/>
                    {
                        data_name.map((x, i) => {
                            if (x.name !== '') {                                
                                return (
                                    <TouchableOpacity 
                                        key={i} 
                                        onPress={() => navigation.navigate('Auth', x.value)}>
                                        <Text style={{color: 'white', fontSize: normalize(15)}}>{x.name}</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return  <View key={i} style={styles.garis}/>
                            }
                        })
                    }
                    <View style={styles.garis}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        backgroundColor: '#689df2', 
        height: '70%', 
        width: '100%',
        flexDirection: 'row',
        
    },
    fontSize:{
        fontSize: normalize(19),
        color: 'white',
        marginHorizontal: '5%'
    },
    fontSize1:{
        fontSize: normalize(13),
        color: 'white',
        marginHorizontal: '5%'
    },
    garis: {
        marginTop: window.height / 70,
        height: '90%',
        borderLeftWidth: 1,
        borderColor: 'white',
    },
})
export default HeaderHome