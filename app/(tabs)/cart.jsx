import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const CartScreen = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: require('../../assets/images/spaghetti.png'),
      price: 12.99,
      quantity: 1,
    },
    {
      id: 2,
      title: "Margherita Pizza",
      image: require('../../assets/images/pizza.png'),
      price: 10.99,
      quantity: 1,
    },
    // Add more items as necessary
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-3xl font-bold text-center mb-5">Your Cart</Text>

      <ScrollView className="flex-1">
        {cartItems.map(item => (
          <View key={item.id} className="flex-row bg-white rounded-lg shadow-md p-4 mb-4 items-center">
            <Image source={item.image} className="w-20 h-20 rounded-md" />
            <View className="flex-1 ml-3">
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text className="text-gray-600">${item.price.toFixed(2)} each</Text>
              <View className="flex-row items-center mt-2">
                <TouchableOpacity
                  className="bg-red-400 rounded-full p-1"
                  onPress={() => handleQuantityChange(item.id, 'decrease')}
                >
                  <Text className="text-white text-lg">-</Text>
                </TouchableOpacity>
                <TextInput
                  value={`${item.quantity}`}
                  editable={false}
                  className="mx-2 w-10 text-center border border-gray-300 rounded"
                />
                <TouchableOpacity
                  className="bg-green-400 rounded-full p-1"
                  onPress={() => handleQuantityChange(item.id, 'increase')}
                >
                  <Text className="text-white text-lg">+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="mt-2 bg-red-600 p-2 rounded-lg"
                onPress={() => setCartItems(prev => prev.filter(cartItem => cartItem.id !== item.id))}
              >
                <Text className="text-white text-center">Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="bg-white rounded-lg shadow-md p-4 mt-5">
        <Text className="text-xl font-bold">Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          className="mt-4 bg-red-400 p-3 rounded-lg"
          onPress={() => router.push('./checkout')}
        >
          <Text className="text-white text-center text-lg">Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5">
        <TextInput
          placeholder="Apply promo code"
          className="p-3 border border-gray-300 rounded-lg"
        />
        <TouchableOpacity className="mt-2 bg-blue-500 p-2 rounded-lg">
          <Text className="text-white text-center">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
