import React from 'react'
import { View, Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const FiturTerlengkap = () => {
    return (
        <View style={{width: '100%', height: hp('33%'), backgroundColor: '#689df2'}}>
        <View style={{marginHorizontal: '5%', marginVertical: '2%'}}>
            <Text style={{fontSize: hp('2.4%'), color: 'white'}}>Dibangun Untuk kemudahan</Text>
            <Text style={{fontSize: hp('1.7%'), color: 'white', marginVertical: hp('1%')}}>
                Tunas Auction Aplikasi Lelang dilengkapi dengan berbagi fitur yang akan memudahkan 
                Anda dalam mengikuti lelang secara online
            </Text>
            <View style={{height: hp('17%'), width: '100%', backgroundColor: 'white', borderRadius: 10}}>

            </View>
        </View>
    </View>
    )
}

export default FiturTerlengkap