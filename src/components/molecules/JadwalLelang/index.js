import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {normalize} from '../../atoms'
import {Button} from '../../atoms'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
const JadwalLelang = () => {
    return(
        <View style={styles.jadwalLelang}>
            <View style={{margin: normalize(10), alignItems: 'center'}}>
                <Text>Lelang Berikutnya dalam:</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.time}>23</Text>
                    <Text style={styles.day}>Hari</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.time}>9</Text>
                    <Text style={styles.day}>Jam</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.time}>20</Text>
                    <Text style={styles.day}>Menit</Text>
                </View>
            </View>
            <View style={{marginHorizontal: 19, top: 10}}>
                <Button color={'#689df2'} width={230} label={'Jadwal Lelang Selengkapnya'}/>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    jadwalLelang: {
        height: '100%',
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c5c6c7',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.2
    },
    time: {
        fontSize: normalize(20) 
    },
    day: {
        fontSize: normalize(15)
    }
})

export default JadwalLelang