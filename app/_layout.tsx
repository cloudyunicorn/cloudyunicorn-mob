import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import 'react-native-url-polyfill/auto';
import '../global.css';
import { AuthProvider, useAuth } from '../lib/AuthContext';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading) {
    return null; // Or a custom loading component
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(root)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}

export default function AppLayout() {
  const theme = {
    ...DefaultTheme,
    colors: {
      primary: 'rgb(43, 94, 167)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(215, 227, 255)',
      onPrimaryContainer: 'rgb(0, 27, 62)',
      secondary: 'rgb(86, 94, 113)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(218, 226, 249)',
      onSecondaryContainer: 'rgb(19, 28, 43)',
      tertiary: 'rgb(112, 85, 116)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(250, 216, 253)',
      onTertiaryContainer: 'rgb(40, 19, 46)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(253, 251, 255)',
      onBackground: 'rgb(26, 27, 31)',
      surface: 'rgb(253, 251, 255)',
      onSurface: 'rgb(26, 27, 31)',
      surfaceVariant: 'rgb(224, 226, 236)',
      onSurfaceVariant: 'rgb(68, 71, 78)',
      outline: 'rgb(116, 119, 127)',
      outlineVariant: 'rgb(196, 198, 208)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 48, 51)',
      inverseOnSurface: 'rgb(241, 240, 244)',
      inversePrimary: 'rgb(170, 199, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(243, 243, 251)',
        level2: 'rgb(236, 238, 248)',
        level3: 'rgb(230, 234, 245)',
        level4: 'rgb(228, 232, 244)',
        level5: 'rgb(224, 229, 243)',
      },
      surfaceDisabled: 'rgba(26, 27, 31, 0.12)',
      onSurfaceDisabled: 'rgba(26, 27, 31, 0.38)',
      backdrop: 'rgba(45, 48, 56, 0.4)',
    },
  };

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <RootLayoutNav />
      </PaperProvider>
    </AuthProvider>
  );
}
