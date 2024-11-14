import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator, ImageBackground, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'react-native-paper'; // Import Checkbox from react-native-paper

const SignUp = () => {
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State for Checkbox

  const handleSignUp = (values, actions) => {
    setTimeout(() => {
      if (values.password !== values.confirmPassword) {
        Alert.alert('Error', 'Passwords do not match.');
        actions.setSubmitting(false);
        return;
      }
      if (!agreedToTerms) {
        Alert.alert('Error', 'You must agree to the Terms and Conditions.');
        actions.setSubmitting(false);
        return;
      }

      // Simulate account creation
      Alert.alert('Success', 'Your account has been created!');
      router.push('./lets'); // Navigate back to login screen or appropriate screen
      actions.setSubmitting(false);
    }, 1000);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')} // Update with your background image path
        className="flex-1 justify-center items-center"
        style={{ resizeMode: 'cover', justifyContent: 'center' }} // Cover the entire background
      >
        <Image source={require('../../assets/images/logoo.png')} className="w-32 h-28 mb-0" />
        <Text className="text-3xl font-rbold text-white mb-10 -mt-5 text-center">Sign Up for MetroMunch!</Text>

        <Formik
          initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={handleSignUp}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
            <>
              <TextInput
                className={`w-72 p-2 border ${touched.username && errors.username ? 'border-red-400' : 'border-gray-300'} rounded-lg bg-gray-100 mb-3`}
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
                autoCapitalize="none"
                placeholderTextColor="#888"
              />
              {touched.username && errors.username && <Text className="text-red-500 mb-2">{errors.username}</Text>}

              <TextInput
                className={`w-72 p-2 border ${touched.email && errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg bg-gray-100 mb-3`}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor="#888"
              />
              {touched.email && errors.email && <Text className="text-red-500 mb-2">{errors.email}</Text>}

              <TextInput
                className={`w-72 p-2 border ${touched.password && errors.password ? 'border-red-400' : 'border-gray-300'} rounded-lg bg-gray-100 mb-3`}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                placeholderTextColor="#888"
              />
              {touched.password && errors.password && <Text className="text-red-500 mb-2">{errors.password}</Text>}

              <TextInput
                className={`w-72 p-2 border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-400' : 'border-gray-300'} rounded-lg bg-gray-100 mb-5`}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                placeholderTextColor="#888"
              />
              {touched.confirmPassword && errors.confirmPassword && <Text className="text-red-500 mb-2">{errors.confirmPassword}</Text>}

              {/* Checkbox for Terms and Conditions */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Checkbox
                  status={agreedToTerms ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setAgreedToTerms(!agreedToTerms);
                  }}
                />
                <Text style={{ color: 'white', marginLeft: 8 }}>
                  I agree to the <Text style={{ textDecorationLine: 'underline' }}>Terms and Conditions</Text>
                </Text>
              </View>

              <TouchableOpacity
                className="w-72 p-4 bg-red-400 rounded-lg items-center mb-3"
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text className="text-white text-lg font-bold">Sign Up</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('./login')}>
                <Text className="text-white text-lg font-bold">or Sign Up</Text>
              </TouchableOpacity>
              {/* Google and Facebook Sign Up Buttons */}
              <View className="flex flex-row justify-around w-full mt-5">
                <TouchableOpacity className="p-3 bg-white rounded-lg flex-2 ml-10" onPress={() => Alert.alert('Google Sign Up')}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../../assets/images/google.png')} // Add your Google logo path here
                      style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <Text className="text-black text-center">Google</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="p-3 bg-blue-800 rounded-lg flex-2 mr-8" onPress={() => Alert.alert('Facebook Sign Up')}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../../assets/images/facebook.png')} // Add your Facebook logo path here
                      style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <Text className="text-white text-center">Facebook</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;
