import { Stack } from "expo-router"
import React from 'react'

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard/index" />
    </Stack>
  )
}

export default RootLayout
