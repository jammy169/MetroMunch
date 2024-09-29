import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#e26060]">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-4xl font-bold tracking-widest mt-20">
          MetroMunch
        </Text>
        {/* Logo or Image */}
        <Image
          source={require('../assets/images/burger.png')} // Add your sushi or restaurant logo image here
          className="w-40 h-40 mb-6 mt-20"
        />

        {/* Subheading Text */}
        <Text className="text-white text-2xl font-bold mb-4 mt-20">
          THE TASTE OF LUXURY 
        </Text>

        {/* Subtitle Text */}
        <Text className="text-white px-10 mb-8 text-center text-lg leading-relaxed">
          Explore the most exquisite meals in town, delivered with the finest service right at your doorstep.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          className="bg-[#ffffff] px-10 py-4 rounded-full shadow-md flex-row items-center"
          onPress={() => router.push('./lets')}
        >
          <Text className="text-[#000000] text-lg font-bold">Get Started</Text>
          <Text className="text-[#000000] text-xl ml-2">→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IndexScreen;
