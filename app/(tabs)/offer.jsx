import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, } from 'react-native';
import { useRouter } from 'expo-router';

const OffersScreen = () => {
  const router = useRouter();
  const [selectedOffer, setSelectedOffer] = React.useState(null);

  const offers = [
    {
      id: 1,
      title: "50% Off on Pasta",
      description: "Indulge in our delicious pasta dishes!",
      image: require('../../assets/images/pasta.png'),
      validUntil: "30th Sep",
    },
    // Add more offers here
  ];

  return (
    <View className="flex-1 bg-gray-100">
      <Text className="text-4xl font-bold text-center mb-5 mt-14">Exclusive Offers</Text>
      <ScrollView>
        <View className="grid grid-cols-2 gap-4 p-4 ">
          {offers.map((offer) => (
            <TouchableOpacity
              key={offer.id}
              className="bg-white rounded-lg shadow-md p-4"
              onPress={() => setSelectedOffer(offer)}
            >
              <Image source={offer.image} className="w-full h-32 rounded-lg" />
              <Text className="text-lg font-semibold">{offer.title}</Text>
              <Text className="text-gray-600">{offer.description}</Text>
              <Text className="text-red-500 font-bold">{offer.validUntil}</Text>
              <TouchableOpacity className="mt-2 bg-red-400 p-2 rounded-lg">
                <Text className="text-white text-center">Claim Offer</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {selectedOffer && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedOffer}
          onRequestClose={() => setSelectedOffer(null)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white rounded-lg p-5 w-80">
              <Text className="text-lg font-bold">{selectedOffer.title}</Text>
              <Image source={selectedOffer.image} className="w-full h-40 rounded-lg mt-3" />
              <Text className="mt-2">{selectedOffer.description}</Text>
              <Text className="text-red-500 font-bold">{selectedOffer.validUntil}</Text>
              <TouchableOpacity
                className="mt-5 bg-red-400 p-2 rounded-lg"
                onPress={() => {
                  // Logic to claim the offer
                  setSelectedOffer(null);
                }}
              >
                <Text className="text-white text-center">Claim Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default OffersScreen;
