import { Stack } from "expo-router";
import "./global.css"
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from '../provider/AuthProvider'

// Makes sure the user is authenticated before accessing protected pages
const InitialLayout = () => {
  const { session, initialized } = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    if (!initialized) return

    // Check if the path/url is in the (auth) group
    const inAuthGroup = segments[0] === '(auth)'
    console.log("attempt to login")
    //if (session && !inAuthGroup) {
    if (session) {
      console.log("login successful")
      // Redirect authenticated users to the list page
      
      router.replace('./(tabs)')
      //router.replace('/list')

    } else if (!session) {
      // Redirect unauthenticated users to the login page
      router.replace('../(auth)')
    }
  }, [session, initialized])

  return <Slot />
}

// Wrap the app with the AuthProvider
const RootLayout = () => {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  )
}

export default RootLayout
