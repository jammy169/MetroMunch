import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "RobotoSlab-Light": require("../assets/fonts/RobotoSlab-Light.ttf"),
    "RobotoSlab-Thin": require("../assets/fonts/RobotoSlab-Thin.ttf"),
    "RobotoSlab-Regular": require("../assets/fonts/RobotoSlab-Regular.ttf"),
    "RobotoSlab-Bold": require("../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null; // Prevents rendering if fonts aren't loaded
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack>
        {/* Define your screens here */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
        <Stack.Screen name="lets" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="front" options={{ headerShown: false }} />
        {/* Add more screens as needed */}
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='order' options={{headerShown:false}}/>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the screen
  },
});

export default MainLayout;
