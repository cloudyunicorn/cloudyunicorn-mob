import { useAuth } from '@/lib/AuthContext';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();
  
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert('Error signing out', error.message);
      } else {
        Alert.alert('Error signing out', 'An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }
  
    return (
      <View className="flex-1 justify-center items-center p-4 bg-white">
        <Text className="text-3xl font-bold mb-6">Welcome Home!</Text>
        <TouchableOpacity
          className="w-full max-w-sm p-3 bg-red-500 rounded-md items-center"
          onPress={handleSignOut}
          disabled={loading}
        >
          <Text className="text-white text-lg font-semibold">
            {loading ? 'Loading...' : 'Sign Out'}
          </Text>
        </TouchableOpacity>
      </View>
    );
}
