import { View, Text, Button, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import BusStopTimings from 'components/constants/bus-stops';
import NavigationBar from 'components/reusable/navigation-bar';

type BusStop = {
  id: number;
  name: string;
  busses: { name: string; arriving: string[] }[];
};

export default function App() {
  return (
    <View className="flex-1 flex-col items-center justify-between">
      <Header />
      <Filter />
      <BusStopList />
      <NavigationBar />
    </View>
  );
}

const Header = () => {
  return (
    <Text className="w-full bg-blue-600 py-2 pl-2 text-xl font-bold text-white">Bus Stops</Text>
  );
};

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
          <Image source={require('../assets/search-button.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={filterPressed}>
        <Image source={require('../assets/filter-button.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={mapPressed}>
        <Image source={require('../assets/map-button.png')} />
      </TouchableOpacity>
    </View>
  );
};

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
          <View
            className={`h-12 w-12 rounded-full ${isFavourite ? 'bg-blue-500' : 'bg-gray-400'}`}
          />
        </TouchableOpacity>
        <Text className="ml-2 flex-1">{busStop.name}</Text>
        <TouchableOpacity onPress={refreshPressed}>
          <Image source={require('../assets/refresh-button.png')} />
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
