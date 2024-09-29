import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // For icons
import { LinearGradient } from 'expo-linear-gradient';

const categories = [
  { id: 1, title: 'Breakfast', image: require('../../assets/images/breakfast.png') },
  { id: 2, title: 'Lunch', image: require('../../assets/images/lunch.png') },
  { id: 3, title: 'Dinner', image: require('../../assets/images/dinner.png') }, 
];

const recommendedDishes = [
  { id: 1, name: 'Pancakes', image: require('../../assets/images/pancakes.png'), price: '$12' },
  { id: 2, name: 'Steak', image: require('../../assets/images/steak.png'), price: '$12' },
  { id: 3, name: 'Burger', image: require('../../assets/images/burger.png'), price: '$12' }
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return ( 
    <View className="flex-1 bg-gray-100">
      <ScrollView>
        {/* Hero Section */}
        <View className="relative">
          <LinearGradient
            colors={['#F87171', '#EF4444']} // Adjust these colors to create a red gradient (bg-red-400)
            className="w-full h-56 justify-center items-center"
          >
            <Image source={require('../../assets/images/logoo.png')} className="w-24 h-28" />
            <Text className="text-white text-4xl font-bold mb-10 -mt-7">Welcome to MetroMunch!</Text>
          </LinearGradient>
        </View>

        {/* Featured Categories */}
        <View className="mt-8 px-4">
          <Text className="text-2xl font-bold mb-4 text-gray-800">Featured Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="mr-4 bg-white shadow-lg rounded-xl overflow-hidden"
                onPress={() => navigation.navigate('Category', { category: category.title })}
              >
                <Image source={category.image} className="w-40 h-40" />
                <View className="p-2">
                  <Text className="text-lg font-semibold text-gray-700">{category.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommended Dishes */}
        <View className="mt-8 px-4">
          <Text className="text-2xl font-bold mb-4 text-gray-800">Recommended Dishes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedDishes.map((dish) => (
              <TouchableOpacity
                key={dish.id}
                className="mr-4 bg-white shadow-lg rounded-xl overflow-hidden"
                onPress={() => navigation.navigate('DishDetails', { dishId: dish.id })}
              >
                <Image source={dish.image} className="w-40 h-40" />
                <View className="p-2">
                  <Text className="text-lg font-semibold text-gray-700">{dish.name}</Text>
                  <Text className="text-gray-500">{dish.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Access Buttons */}
        <View className="mt-8 flex-row justify-around px-4">
          <TouchableOpacity
            className="bg-red-400 p-4 rounded-full shadow-lg flex-row justify-center items-center"
            onPress={() => navigation.navigate('order')}
          >
            <FontAwesome name="shopping-cart" size={24} color="white" />
            <Text className="text-white font-bold ml-2">Order Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-800 p-4 rounded-full shadow-lg flex-row justify-center items-center"
            onPress={() => navigation.navigate('menu')}
          >
            <FontAwesome name="list" size={24} color="white" />
            <Text className="text-white font-bold ml-2">View Menu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
