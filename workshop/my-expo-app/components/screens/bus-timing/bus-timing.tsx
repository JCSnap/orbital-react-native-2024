import { View } from 'react-native';
import Header from './components/header';
import Filter from './components/filter';
import BusStopList from './components/bus-stop-list';

export default function BusTiming() {
  return (
    <View className="flex-1 flex-col items-center justify-between">
      <Header />
      <Filter />
      <BusStopList />
    </View>
  );
}
