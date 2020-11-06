import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {data_name} from './utils'
const HeaderHome = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={{marginTop: '8%', width: '100%'}}>
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
                                        <Text style={{color: 'white', fontSize: hp('2%')}}>{x.name}</Text>
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
        height: hp('30%'), 
        width: '100%',
        flexDirection: 'row',
        
    },
    fontSize:{
        fontSize: hp('2.5%'),
        color: 'white',
        marginHorizontal: wp('5%')
    },
    fontSize1:{
        fontSize: hp('1.7%'),
        color: 'white',
        marginTop: hp('1%'),
        marginHorizontal: wp('5%')
    },
    garis: {
        marginTop: hp('1%'),
        height: hp('2.5%'),
        borderLeftWidth: 1,
        borderColor: 'white',
    },
})
export default HeaderHome