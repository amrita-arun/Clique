import { View, Text } from 'react-native'
import { Stack, Tabs } from 'expo-router';

import React from 'react'

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: true,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
                
            },
            tabBarStyle: {
                //backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0D23'
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="timeline"
            options={{
                title: 'Timeline',
                headerShown: false,
                
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                
            }}
        />
    </Tabs>
  )
  
}

export default _layout