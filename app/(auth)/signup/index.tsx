import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { supabase } from '../../../lib/supabase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Card style={{ width: '100%', maxWidth: 400, padding: 16 }}>
        <Card.Content>
          <Text variant="displaySmall" style={{ marginBottom: 24, textAlign: 'center' }}>Sign Up</Text>
          <TextInput
            mode="outlined"
            label="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{ marginBottom: 16 }}
            theme={{ roundness: 25 }}
          />
          <TextInput
            mode="outlined"
            label="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            autoCapitalize="none"
            style={{ marginBottom: 24 }}
            theme={{ roundness: 25 }}
          />
          <Button
            mode="contained"
            onPress={signUpWithEmail}
            loading={loading}
            disabled={loading}
            style={{ marginBottom: 16 }}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </Button>
          <Link href="/login" style={{ color: '#6200ee', textAlign: 'center' }}>
            Already have an account? Log In
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Signup;
