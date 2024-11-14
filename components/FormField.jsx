import React from 'react';
import { View, TextInput, Text } from 'react-native';

const FormField = ({ 
  placeholder, 
  value, 
  onChangeText, 
  error, 
  containerStyle, 
  secureTextEntry = false, 
  keyboardType = 'default' 
}) => {
  return (
    <View style={[{ width: '100%', marginBottom: error ? 10 : 20 }, containerStyle]}>
      {/* Display error message above the input box */}
      {error && <Text style={{ color: 'red', marginBottom: 4, textAlign: 'center' }}>{error}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          color: '#333',
          fontSize: 16,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: error ? 'red' : '#ccc', // Conditionally set border color based on error
          padding: 10,
          marginLeft: 40,
          marginRight: 40,
          backgroundColor: '#f9f9f9', // Background color for input box
        }}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default FormField;
