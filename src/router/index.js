import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
import * as components from '../pages'
import SUBMODULES from './PageList'


const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
          {
            SUBMODULES.map((x, i) => {
              return (
              <Stack.Screen
                  name={x}
                  key={i}
                  component={components[x]}
                  options={{headerShown: false}}
              >
            </Stack.Screen>
              )
            })
          }
        </Stack.Navigator>
    )
}

export default Router;