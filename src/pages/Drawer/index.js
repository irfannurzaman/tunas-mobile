import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();
import PageList from './PageList'
import * as components from './components'

const MyDrawer = () => {
    return (
      <Drawer.Navigator>
        {
          PageList.map((x, i) => {
            return (
              <Drawer.Screen 
                name={x} 
                key={i} 
                component={components[x]} />
            )
          })
        }
      </Drawer.Navigator>
    );
  }

  export default MyDrawer