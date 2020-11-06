import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {data_rekomondasi} from '../../../utils'
import {Button} from '../../atoms'

const UnitRekomondasi = () => {
    return (
        <View  style={{
            width: 'auto', 
            height: hp('40%'), 
            margin: hp('1.5%')
            }}>
            <View 
              style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: hp('2%')
                }}>
                    <Text style={styless.text}>Unit Rekomondasi</Text>
                    <TouchableOpacity>
                        <Text style={styless.text}>View All</Text>
                    </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    data_rekomondasi.map((x, i) => {
                        return (
                            <View key={i} style={styless.daftar}>
                                <View style={{
                                    backgroundColor: 'red', 
                                    height: hp('20%'), 
                                    width: '100%', 
                                    borderTopLeftRadius: 10, 
                                    borderTopRightRadius: 10}}></View>
                                <Text style={styless.text}>{x.mobil}</Text>
                                <Text style={styless.text}>Rp{x.price}</Text>
                                <View style={{marginTop: hp('1%')}}>
                                    <Button color={'#689df2'} width={'17%'} label={'view'}/>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default UnitRekomondasi

const styless = StyleSheet.create({
    text: {
        fontSize: hp('2%')
    },
    daftar: {
        height: hp('33%'),
        width: wp('43%'),
        borderRadius: 10,
        borderWidth: 0.6,
        elevation: 1.5,
        marginRight: wp('5%'),
        alignItems: 'center'
    }
})