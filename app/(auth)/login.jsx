import React, { useState } from 'react';
import { View, Text, Alert, SafeAreaView, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const router = useRouter();

  const handleLogin = (values, actions) => {
    setTimeout(() => {
      // Simulate login and redirect
      Alert.alert('Success', 'You are logged in!');
      router.push('./home'); // Replace with your home screen route
      actions.setSubmitting(false);
    }, 1000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')} // Replace with your actual background image
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        {/* Logo */}
        <Image
          source={require('../../assets/images/logoo.png')} // Replace with your logo
          style={{ width: 130, height: 120, marginBottom: -10 }}
        />

        {/* Heading */}
        <Text style={{ fontSize: 30, fontFamily: 'Roboto-Bold', color: '#fff', marginBottom: 30 }}>
          Login to MetroMunch
        </Text>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
            <>
              {/* FormField for Email */}
              <FormField
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                error={touched.email && errors.email}
                containerStyle="bg-[#ffffff] px-10 py-4 rounded-full shadow-md mb-3"
              />

              {/* FormField for Password */}
              <FormField
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                error={touched.password && errors.password}
                containerStyle="bg-[#ffffff] px-10 py-4 rounded-full shadow-md mb-3"
              />

              {/* Login Button with dynamic backgroundColor */}
              <CustomButton
                title="Login"
                handlePress={handleSubmit}
                containerStyles={{
                  backgroundColor: isSubmitting ? '#aaa' : '#FF6F61', // Conditional background color
                  paddingHorizontal: 40,
                  paddingVertical: 16,
                  borderRadius: 9999,
                  marginTop: 20,
                }}
                textStyles={{
                  color: 'white',  // White text color
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
                disabled={isSubmitting}
              />
            </>
          )}
        </Formik>

        {/* Go to Sign Up Button */}
        <CustomButton
          title="Go to Sign Up"
          handlePress={() => router.push('./lets')} // Replace with your signup screen route
          containerStyles={{
            backgroundColor: '#403f3f',
            paddingHorizontal: 40,
            paddingVertical: 16,
            borderRadius: 9999,
            marginTop: 20,
          }}
          textStyles={{
            color: 'white',  // White text color
            fontSize: 18,
            fontWeight: 'bold',
          }}
          
         />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
