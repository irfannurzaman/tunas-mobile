import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
const HeaderHome = () => {
    return (
        <View style={styles.header}>
            <View style={{marginTop: '8%', width: '100%'}}>
                <Text style={styles.fontSize}>Selamat Datang,</Text>
                <Text style={styles.fontSize1}>Silakan daftar untuk mendaftarkan fitur lelang</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                    <View style={styles.container}>
                        <View style={styles.garis}/>
                        <Text style={{color: 'white', fontSize: hp('2%')}}>Login</Text>
                        <View style={styles.garis}/>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.garis}/>
                        <Text style={{color: 'white', fontSize: hp('2%')}}>Login</Text>
                        <View style={styles.garis}/>
                    </View>
                    {/* <Text style={{marginLeft: 70, marginRight: 70, color: 'white', fontSize: hp('2%')}}>Register</Text> */}
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
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%'
    }
})
export default HeaderHome