import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: '#ffffff', // White background
          paddingHorizontal: 40, // Horizontal padding
          paddingVertical: 16, // Vertical padding
          borderRadius: 9999, // Fully rounded button
          shadowColor: '#000', // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow offset
          shadowOpacity: 0.1, // Shadow opacity
          shadowRadius: 6, // Shadow blur radius
          marginTop: 16, // Margin top
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        containerStyles, // Allow overriding via props
      ]}
      disabled={isLoading}
    >
      <Text
        style={[
          {
            color: '#000000', // Black text color
            fontSize: 18, // Font size
            fontWeight: 'bold', // Font weight
          },
          textStyles, // Allow overriding via props
        ]}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
