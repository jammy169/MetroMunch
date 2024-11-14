import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../components/CustomButton'; // Import CustomButton

const IndexScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#ec8383]">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-4xl font-bold tracking-widest mt-20">
          MetroMunch
        </Text>
        <Image
          source={require('../assets/images/logoo.png')}
          className="w-40 h-40 -mt-5 -mb-24"
        />
        <Image
          source={require('../assets/images/burger.png')}
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

        {/* CustomButton for Get Started */}
        <CustomButton
          title="Get Started"
          handlePress={() => router.push('./lets')}
          containerStyles="bg-[#ffffff] px-10 py-4 rounded-full shadow-md mt-4"
          textStyles="text-[#000000] text-lg font-bold"
        />
      </View>
    </SafeAreaView>
  );
};

export default IndexScreen;
