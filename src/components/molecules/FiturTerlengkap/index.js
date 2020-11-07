import React from 'react'
import { View, Text} from 'react-native'
import {normalize} from '../../atoms'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const FiturTerlengkap = () => {
    return (
        <View style={{width: '100%', height: '17.5%', backgroundColor: '#689df2', marginTop: '5%'}}>
        <View style={{marginHorizontal: '5%', marginVertical: '2%'}}>
            <Text style={{fontSize: normalize(16), color: 'white'}}>Dibangun Untuk kemudahan</Text>
            <Text style={{fontSize: normalize(12), color: 'white', marginVertical: normalize(7)}}>
                Tunas Auction Aplikasi Lelang dilengkapi dengan berbagi fitur yang akan memudahkan 
                Anda dalam mengikuti lelang secara online
            </Text>
            <View style={{height: '59%', width: '100%', backgroundColor: 'white', borderRadius: 10}}>

            </View>
        </View>
    </View>
    )
}

export default FiturTerlengkap