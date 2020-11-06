import React from 'react'
import {Animated, StyleSheet, View, Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {HamburgerMenu} from '../../atoms'
const Navbar = ({fadeAnim, navigation}) => {
    return (
    <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <HamburgerMenu navigation={navigation}/>
          <Text style={{fontSize: hp('2.4%'), marginLeft: hp('1%'), color: 'white'}}>Home</Text>
      </View>
  </Animated.View>
    )
}
const styles = StyleSheet.create({
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "rgba(104, 157, 242, 0.50)",
        position: 'absolute',
        width: '100%',
        height: hp('8%'),
        justifyContent: 'flex-end',
  
      },
})

export default Navbar