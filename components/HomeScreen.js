import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <Image source={require('../assets/images/logoo.png')} className="w-40 h-32 mb-4" />
      <Text className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome to MetroMunch</Text>
      {/* Add more content or components here */}
    </View>
  );
};

export default HomeScreen;