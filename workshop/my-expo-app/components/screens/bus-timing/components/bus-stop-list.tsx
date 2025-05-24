import { View, Text, TouchableOpacity } from 'react-native';
import BusStopTimings from 'components/constants/bus-stops';
import { useState } from 'react';
import { BusStop } from '../types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomText from 'components/reusable/text';
import { saveFavourite as saveFavouriteToDB } from 'components/db/bus-db';

const BusStopList = () => {
  return (
    <View className="w-full flex-1 flex-col items-center">
      {BusStopTimings.map((busStop) => (
        <BusStopComponent key={busStop.id} busStop={busStop} />
      ))}
    </View>
  );
};

const BusStopComponent = ({ busStop }: { busStop: BusStop }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isTimingComponentOpen, setIsTimingComponentOpen] = useState(false);

  const refreshPressed = () => {
    console.log('Refresh button pressed for bus stop', busStop.name);
  };

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    saveFavouriteToDB(busStop.id.toString());
    console.log('Favourite button pressed for bus stop', busStop.name, isFavourite);
  };

  const toggleTimingComponent = () => {
    setIsTimingComponentOpen(!isTimingComponentOpen);
  };

  return (
    <TouchableOpacity
      onPress={toggleTimingComponent}
      className="w-full flex-col items-center justify-between">
      <View className="w-full flex-row items-center justify-between border-b border-gray-300 px-2 py-1">
        <TouchableOpacity onPress={toggleFavourite}>
          <AntDesign name="star" size={24} color={isFavourite ? 'lightblue' : 'gray'} />
        </TouchableOpacity>
        <CustomText>{busStop.name}</CustomText>
        <TouchableOpacity onPress={refreshPressed}>
          <MaterialCommunityIcons name="refresh" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {isTimingComponentOpen && (
        <View className="w-full flex-col items-center justify-between">
          {busStop.busses.map((bus) => (
            <View
              key={bus.name}
              className="w-full flex-row items-center justify-between border-b border-gray-200 px-8 py-1">
              <Text className="mx-2 font-bold">{bus.name}</Text>
              {bus.arriving.map((time) => (
                <Text className="mx-2" key={time}>
                  {time} mins
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BusStopList;
