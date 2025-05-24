import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Filter = () => {
  const [searchText, setSearchText] = useState('');

  const filterPressed = () => {
    console.log('Filter button pressed');
  };

  const mapPressed = () => {
    console.log('Map button pressed');
  };

  const searchPressed = () => {
    console.log('Search button pressed', searchText);
  };

  const onChangeText = (text: string) => {
    setSearchText(text);
    console.log(searchText);
  };

  return (
    <View className="my-1 w-full flex-row items-center justify-between px-2">
      <View className="w-4/5 flex-row items-center justify-between">
        <TextInput
          placeholder="Select Bus Stop or Building"
          value={searchText}
          onChangeText={onChangeText}
          className="w-3/4 rounded-full border-2 border-gray-300 p-2"
        />
        <TouchableOpacity onPress={searchPressed}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={filterPressed}>
        <FontAwesome name="sort-amount-desc" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={mapPressed}>
        <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
