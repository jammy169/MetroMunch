import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    try {
      // Mock authentication request
      const response = await mockAuthService(username, password);

      if (response.success) {
        router.push('./home'); // Navigate to the home screen
      } else {
        Alert.alert('Login Failed', response.message);
      }
    } catch (error) {
      console.error('Login error: ', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  // Mock authentication service function
  const mockAuthService = (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'test' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid username or password.' });
        }
      }, 1000);
    });
  };

  const handleForgotPassword = () => {
    // This is where you would navigate to a Forgot Password screen
    Alert.alert('Forgot Password', 'A password reset link has been sent to your email.');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // Update with your background image path
      className="flex-1 justify-center items-center"
      style={{ resizeMode: 'cover', justifyContent: 'center' }} // Cover the entire background
    >
      <Image source={require('../../assets/images/logoo.png')} className="w-32 h-28 mb-0" />
      <Text className="text-4xl font-rbold text-white mb-10 -mt-6 text-center">Log In to MetroMunch</Text>
      <TextInput
        className="w-72 p-2 border border-gray-300 rounded-lg bg-gray-100 mb-5"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      <TextInput
        className="w-72 p-2 border border-gray-300 rounded-lg bg-gray-100 mb-5"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />
      {/* <TouchableOpacity className="w-72 p-2 bg-red-400 rounded-lg mb-5" onPress={handleLogin}> */}
      <TouchableOpacity className="w-72 p-2 bg-red-400 rounded-lg mb-5" 
onPress={() => router.push('./home')}>
        <Text className="text-white text-center text-lg font-bold">Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword} className="-mt-1">
        <Text className="text-lg text-white text-center">Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('./lets')}>
        <Text className="text-lg text-white text-center">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
};

export default Login;
