import { View } from "react-native";
import Header from "./components/Header";
import Filter from "./components/Filter";
import BusStops from "./components/BusStops";
import NavigationTab from "@/components/navigation/NavigationTab";
import MapIcon from "./components/MapIcon";

export default function Home() {
    return (
        <View className="flex flex-col justify-between h-full">
            <Header />
            <Filter />
            <BusStops />
            <NavigationTab />
            <MapIcon />
        </View>
    );
}
