import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import {data_rekomondasi} from '../../../utils'
import {Button, normalize} from '../../atoms'
const windows = Dimensions.get('window')

const UnitRekomondasi = () => {
    return (
        <View  style={{
            width: 'auto', 
            height: '23%', 
            margin: '2%'
            }}>
            <View 
              style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: '4%'
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
                                    height: '60%', 
                                    width: '100%', 
                                    borderTopLeftRadius: 10, 
                                    borderTopRightRadius: 10}}></View>
                                <Text style={styless.text}>{x.mobil}</Text>
                                <Text style={styless.text}>Rp{x.price}</Text>
                                <View style={{marginTop: normalize(6)}}>
                                    <Button color={'#689df2'} width={90} label={'view'}/>
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
        fontSize: normalize(15)
    },
    daftar: {
        height: windows.height / 3,
        width: '25%',
        borderRadius: 10,
        borderWidth: 0.6,
        elevation: 1.5,
        marginRight: 15,
        alignItems: 'center'
    }
})