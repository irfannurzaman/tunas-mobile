import React, {useRef } from 'react'
import { View, Dimensions, StyleSheet, ScrollView, Animated, Text} from 'react-native'
import {HeaderHome, JadwalLelang, FiturLelang, UnitRekomondasi, Carousel, NavBar, FiturTerlengkap, About} from '../../components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
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
                    <HeaderHome/>
                    <Carousel/>
                </View>
                <View style={{height: hp('23.5%'), alignItems: 'center'}}>
                    <JadwalLelang/>
                    <View style={styles.line}/>
                </View>
                <FiturLelang/>
                <FiturTerlengkap/>
                <UnitRekomondasi/>
                <About/>
            </ScrollView>
            <NavBar 
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