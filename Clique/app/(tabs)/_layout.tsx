import { View, Text } from 'react-native'
import { Stack, Tabs } from 'expo-router';

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../provider/AuthProvider'


const _layout = () => {
    const { signOut } = useAuth()

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
                //headerShown: false,
                headerRight: () => (
                    <TouchableOpacity onPress={signOut}>
                      <Ionicons name="log-out-outline" size={30} color={'#000'} />
                    </TouchableOpacity>
                ),
            }}
        />
    </Tabs>
  )
  
}

export default _layout