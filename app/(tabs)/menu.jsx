import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Switch, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const categories = ['Starters', 'MainCourse', 'Desserts', 'Drinks'];

const dishes = {
  Starters: [
    {
      id: 1,
      name: 'Garlic Bread',
      description: 'Crispy garlic bread with a hint of basil.',
      price: '$99.99',
      image: require('../../assets/images/bread.png'),
    },
    {
      id: 2,
      name: 'Bruschetta',
      description: 'Toasted bread topped with fresh tomatoes and herbs.',
      price: '$99.99',
      image: require('../../assets/images/bruschetta.png'),
    },
  ],
  MainCourse: [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Perfectly grilled chicken, tender and infused with smoky flavors, served with a side of fresh herbs.',
      price: '$299.99',
      image: require('../../assets/images/chicken.png'),
    },
    {
      id: 2,
      name: 'Bbq Ribs',
      description: 'Juicy grilled ribs with a side of veggies.',
      price: '$299.99',
      image: require('../../assets/images/bbq.png'),
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti coated in a rich and velvety carbonara sauce, with crispy pancetta and a hint of garlic, garnished with Parmesan.',
      price: '$199.99',
      image: require('../../assets/images/spaghetti.png'),
    },
    {
      id: 4,
      name: 'Margherita Pizza',
      description: 'Wood-fired pizza with a crisp, thin crust, topped with tangy tomato sauce, fresh mozzarella, and fragrant basil leave',
      price: '$199.99',
      image: require('../../assets/images/pizza.png'),
    },
    
  ],
  Desserts: [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake topped with ganache.',
      price: '$298.99',
      image: require('../../assets/images/cake.png'),
    },
    {
      id: 2,
      name: 'Manggo Float',
      description: 'A refreshing dessert made with layers of ripe mangoes, sweetened cream, and graham crackers, chilled to perfection for a creamy, tropical indulgence',
      price: '$298.99',
      image: require('../../assets/images/mango.png'),
    },
  ],
  Drinks: [
    { 
      id: 1,
      name: 'Coca Cola',
      description: 'Classic fizzy drink.',
      price: '$2.99',
      image: require('../../assets/images/coke.png'),  
    },
    {
      id: 2,
      name: 'Ice Tea',
      description: 'Classic refreshing drink.',
      price: '$2.99',
      image: require('../../assets/images/icetea.png'),
    },
  ],
};

const ViewMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Starters');
  const systemColorScheme = useColorScheme(); // Detect system theme
  const [colorScheme, setColorScheme] = useState(systemColorScheme); // Use system theme as initial value
  const [expanded, setExpanded] = useState(null);
  const router = useRouter();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  const toggleDishDescription = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View className={`flex-1 ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} px-4`}>
      {/* Header */}
      <View className="flex-row justify-between items-center pt-10 pb-4">
        <Text className={`text-3xl font-bold ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
          Menu
        </Text>
        <Switch
          value={colorScheme === 'dark'}
          onValueChange={toggleColorScheme}
          thumbColor="#f53d3d"
        />
      </View>

      {/* Fixed Category Tabs */}
      <View style={{ height: 60 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-5">
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-red-400' : 'bg-gray-300 dark:bg-gray-700'} mr-2`}
              onPress={() => setSelectedCategory(category)}
            >
              <Text className="text-white font-semibold">{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Menu Items */}
      <ScrollView>
        {dishes[selectedCategory]?.map((dish) => (
          <View key={dish.id} className="mb-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <View className="flex-row justify-between">
              <Image source={dish.image} className="w-20 h-20 rounded-lg" />
              <View className="flex-1 ml-4">
                <Text className={`text-lg font-bold ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {dish.name}
                </Text>
                <Text className={`text-sm ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {dish.price}
                </Text>
                {expanded === dish.id && (
                  <Text className="text-gray-600 dark:text-gray-400 mt-2">
                    {dish.description}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={() => toggleDishDescription(dish.id)}>
                <Feather
                  name={expanded === dish.id ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color="#f53d3d"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Cart Button */}
      <TouchableOpacity
        onPress={() => router.push('/cart')}
        className="absolute bottom-10 right-10 bg-red-400 p-4 rounded-full shadow-lg"
      >
        <Feather name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ViewMenu;
