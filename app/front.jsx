// front.jsx

import { Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SplashScreen } from 'expo-router';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Front = () => {
  // You can add your front page content here

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Welcome to the Front Page</Text>
      {/* Add more content or components here */}
      <Link href="/home" className="mt-5 text-blue-500 underline">Go to Home</Link>
    </View>
  );
};

export default Front;
