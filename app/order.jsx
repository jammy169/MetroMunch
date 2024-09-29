import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, useColorScheme } from 'react-native';
import { Feather } from '@expo/vector-icons';

const OrderNow = () => {
  const [quantity, setQuantity] = useState(1);
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);
  const dish = {
    name: 'Grilled Chicken',
    description: 'Juicy grilled chicken with a side of veggies.',
    price: '$12.99',
    image: require('../assets/images/chicken.png'), // Add your image path
  };

  const handleOrder = () => {
    // Handle order submission logic
    alert(`Order placed for ${quantity} ${dish.name}(s)!`);
  };

  return (
    
    <View className={`flex-1  ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} p-4`}>
      {/* Header */}
      <View className="flex-row justify-between items-center mb-5 mt-8">
        <Text className={`text-3xl font-bold ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
          Order Now
        </Text>
        <TouchableOpacity onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>
          <Feather name="sun" size={24} color="#f53d3d" />
        </TouchableOpacity>
      </View>

      {/* Dish Detail */}
      <View className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
        <Image source={dish.image} className="w-full h-48 rounded-lg mb-4" resizeMode="cover" />
        <Text className={`text-2xl font-semibold ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
          {dish.name}
        </Text>
        <Text className={`text-sm ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {dish.description}
        </Text>
        <Text className={`text-xl font-bold mt-2 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
          {dish.price}
        </Text>
      </View>

      {/* Quantity Selection */}
      <View className="flex-row items-center mb-4">
        <Text className={`text-lg ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>Quantity:</Text>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
          className="bg-red-400 p-2 rounded-full ml-2"
        >
          <Text className="text-white font-bold">-</Text>
        </TouchableOpacity>
        <TextInput
          value={String(quantity)}
          keyboardType="numeric"
          onChangeText={text => setQuantity(Number(text))}
          className="border border-gray-300 rounded-lg text-center w-16 mx-2"
        />
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          className="bg-red-400 p-2 rounded-full"
        >
          <Text className="text-white font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Order Button */}
      <TouchableOpacity
        onPress={handleOrder}
        className="bg-red-400 p-4 rounded-lg shadow-lg"
      >
        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderNow;
