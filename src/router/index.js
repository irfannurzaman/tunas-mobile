import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
const Stack = createStackNavigator();
import {Home} from '../pages'
const Drawer = createDrawerNavigator();
const Feed = () => {
    return(
      <View></View>
    )
  }
  const Article = () => {
    return(
      <View></View>
    )
  }
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    );
  }


const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="MyDrawer"
                component={MyDrawer}
                options={{headerShown: false}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router;