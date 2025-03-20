import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../provider/AuthProvider'


const profile = () => {

    const { signOut } = useAuth()

  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default profile