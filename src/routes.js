import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home'
import Mylinks from './pages/Mylinks'
import { } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2ccbb9',
                activeTintColor: '#ffff',
                marginTop: 16,
                labelStyle: {
                    fontSize: 19,
                }
            }}
        >

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Links'
                }}
            />

            <Drawer.Screen
                name="Mylinks"
                component={Mylinks}
                options={{
                    title: 'Meus Links'
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;