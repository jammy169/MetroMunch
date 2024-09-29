import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: 'Xander Ford',
    email: 'xander@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, Anytown, USA',
    profilePicture: require('../../assets/images/user.png'), // Placeholder image
  });

  const handleEditProfile = () => {
    // Function to edit profile (navigation or modal can be implemented here)
    console.log('Edit profile clicked');
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-3xl font-bold text-center mb-5">Profile</Text>

      <ScrollView className="flex-1">
        <View className="bg-white rounded-lg shadow-md p-5 mb-5 items-center">
          <Image source={user.profilePicture} className="w-32 h-32 rounded-full mb-3" />
          <Text className="text-xl font-semibold">{user.name}</Text>
          <Text className="text-gray-600">{user.email}</Text>
          <Text className="text-gray-600">{user.phone}</Text>

          <TouchableOpacity
            className="mt-3 bg-blue-500 p-2 rounded-lg"
            onPress={handleEditProfile}
          >
            <Text className="text-white text-lg">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-md p-5 mb-5">
          <Text className="text-xl font-semibold mb-3">Address</Text>
          <Text className="text-gray-600">{user.address}</Text>
          <TouchableOpacity
            className="mt-3 bg-blue-500 p-2 rounded-lg"
            onPress={() => console.log('Edit address clicked')}
          >
            <Text className="text-white text-lg">Edit Address</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-md p-5 mb-5">
          <Text className="text-xl font-semibold mb-3">Order History</Text>
          {/* Example past orders */}
          <TouchableOpacity onPress={() => console.log('View order details')}>
            <Text className="text-blue-500">Order #1234 - $25.00</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('View order details')}>
            <Text className="text-blue-500">Order #5678 - $15.00</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-md p-5 mb-5">
          <Text className="text-xl font-semibold mb-3">Payment Methods</Text>
          <Text className="text-gray-600">Visa ending in 1234</Text>
          <TouchableOpacity
            className="mt-3 bg-blue-500 p-2 rounded-lg"
            onPress={() => console.log('Edit payment methods clicked')}
          >
            <Text className="text-white text-lg">Manage Payment Methods</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-md p-5 mb-5">
          <Text className="text-xl font-semibold mb-3">Preferences</Text>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Enable Notifications</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Toggle</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-600">Theme</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">Light/Dark Mode</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          className="mt-5 bg-red-500 p-4 rounded-lg items-center"
          onPress={() => console.log('Logout clicked')}
        >
          <Text className="text-white text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
0