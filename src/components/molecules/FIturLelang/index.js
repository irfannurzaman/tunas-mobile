import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native'
import {data_lelang} from '../../../utils'
import {normalize} from '../../atoms'
const window = Dimensions.get("window")
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const FiturLelang = () => {
    return (
        <View style={{alignItems: 'center', marginTop: '7%'}}>
            <Text style={{fontSize: normalize(17)}}>Manfaat Fitur Lelang Terlengkap</Text>
            <ScrollView style={{marginHorizontal: '3%', marginTop: '5%'}} horizontal showsHorizontalScrollIndicator = {false}>
                {
                    data_lelang.map((x, i) => {
                        const xi = i + 1
                        if (xi % 2) {                            
                            return (
                                <View style={styles.kotak} key={i}/>
                            )
                        } else {
                            return(
                                <View style={{ 
                                    height: hp('10%'), 
                                    width: hp('7%'), 
                                    justifyContent: 'center', 
                                    alignItems: 'center'}} 
                                    key={i}>
                                    <Image source={x.x} style={{height: 50, width: 50}}/>
                                </View>
                            )
                        }
                    })
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    kotak: {
        width: window.width /5.5,
        height: window.height /10,
        borderWidth: 0.9,
        borderRadius: 10
    }
})
export default FiturLelang