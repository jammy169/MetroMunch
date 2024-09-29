import { View, Text, Image } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router';
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabIcon = ({icon, color, name, focused, }) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )

}

const TabLayout = () => {
    return (
     <>
      <Tabs>
  
  
      <Tabs.Screen
  name="home"
  options={{
    title: 'Home',
    headerShown: false,  // Hides the header if not needed
    tabBarIcon: ({ color, focused }) => (
      <TabIcon
        icon={icons.home}  // Pass the home icon
        name="home"
        focused={focused}
      />
    ),
  }}
/>

  
  <Tabs.Screen
          name="offer"
          options={{
            title:'Offer',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
             <TabIcon
              icon={icons.offer}
              name="offer"
              focused={focused}
             />
            )
          }}
        />
          <Tabs.Screen
          name="menu"
          options={{
            title:'menu',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
             <TabIcon
              icon={icons.menu}
              name="menu"
              focused={focused}
             />
            )
          }}
        />
             <Tabs.Screen
          name="cart"
          options={{
            title:'Cart',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
             <TabIcon
              icon={icons.cart}
              name="cart"
              focused={focused}
             />
            )
          }}
        />
  
  <Tabs.Screen
          name="profile"
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
             <TabIcon
              icon={icons.profile}
              name="profile"
              focused={focused}
             />
            )
          }}
        />
  
  
      </Tabs>
     </>
     
    )
  }
  


export default TabLayout