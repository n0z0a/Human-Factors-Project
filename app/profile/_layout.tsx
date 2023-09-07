import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, headerTitle: 'Profile' }} />
      <Stack.Screen name="settings" options={{ headerShown: false, presentation: 'card' }} />
    </Stack>
  )
}

export default Layout
