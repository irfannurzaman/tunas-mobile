import React, {useRef } from 'react'
import { View, Dimensions, StyleSheet, ScrollView, Animated} from 'react-native'
import * as components from '../../../components'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
const window = Dimensions.get("window")
const Home = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const _handleHeaderColor = event => {
        let y = event.nativeEvent.contentOffset.y;
        if (y > 80) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }).start();
        }
      };

    return (
        <View>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            onScroll = {
                event => _handleHeaderColor(event)
            }
            >
                <View style={{height: hp('45%')}}>
                    <components.HeaderHome navigation={navigation}/>
                    <components.Carousel/>
                </View>
                <View style={{height: hp('23.5%'), alignItems: 'center'}}>
                    <components.JadwalLelang/>
                    <View style={styles.line}/>
                </View>
                <components.FiturLelang/>
                <components.FiturTerlengkap/>
                <components.UnitRekomondasi/>
                <components.About/>
            </ScrollView>
            <components.NavBar 
                fadeAnim={fadeAnim} 
                navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 0.5,
        width: window.width / 1.3,
        margin: '4%'
    }
  });

export default Home