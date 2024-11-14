import React, { useState } from 'react';
import { View, Text, Alert, Image, ActivityIndicator, ImageBackground, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'react-native-paper';
import CustomButton from '../../components/CustomButton'; // Import CustomButton
import FormField from '../../components/FormField'; // Import FormField
import { TouchableOpacity } from 'react-native';

const SignUp = () => {
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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

      Alert.alert('Success', 'Your account has been created!');
      router.push('./login');
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
        source={require('../../assets/images/background.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', resizeMode: 'cover', }}
      >
        <Image source={require('../../assets/images/logoo.png')} style={{ width: 128, height: 112, marginBottom: -10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' }}>
          Sign Up for MetroMunch!
        </Text>

        <Formik
          initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={handleSignUp}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
            <>
              <FormField
                placeholder="Username"
                value={values.username}
                onChangeText={handleChange('username')}
                error={touched.username && errors.username}
              />

              <FormField
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                error={touched.email && errors.email}
              />

              <FormField
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                error={touched.password && errors.password}
              />

              <FormField
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
                error={touched.confirmPassword && errors.confirmPassword}
                
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Checkbox
                  status={agreedToTerms ? 'checked' : 'unchecked'}
                  onPress={() => setAgreedToTerms(!agreedToTerms)}
                />
                <Text style={{ color: 'white', marginLeft: 8 }}>
                  I agree to the <Text style={{ textDecorationLine: 'underline' }}>Terms and Conditions</Text>
                </Text>
              </View>

              <CustomButton
                title="Sign Up"
                handlePress={handleSubmit}
                containerStyles={{
                  backgroundColor: isSubmitting ? '#aaa' : '#FF6F61',
                  paddingVertical: 13,
                  borderRadius: 10,
                  width: '50%',
                  alignItems: 'center',
                }}
                textStyles={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                isLoading={isSubmitting}
              />

              <CustomButton
                title="Or Sign In"
                handlePress={() => router.push('./login')}
                containerStyles={{
                  backgroundColor: '#403f3f',
                  paddingVertical: 13,
                  borderRadius: 10,
                  width: '50%',
                  marginTop: 10,
                  alignItems: 'center',
                }}
                textStyles={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              />

              {/* Google and Facebook Sign-Up Buttons */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => Alert.alert('Google Sign Up')}
                >
                  <Image
                    source={require('../../assets/images/google.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={{ color: '#000' }}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: '#3b5998',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => Alert.alert('Facebook Sign Up')}
                >
                  <Image
                    source={require('../../assets/images/facebook.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                  />
                  <Text style={{ color: '#fff' }}>Facebook</Text>
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
