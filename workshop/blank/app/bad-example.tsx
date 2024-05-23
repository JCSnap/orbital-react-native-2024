import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text: string) => {
        setSearchText(text);
        console.log(searchText);
    };

    const busStops = [
        { name: "University Town", shortName: "UTown", distance: 190 },
        { name: "Central Library", shortName: "CL", distance: 200 },
        { name: "Arts", shortName: "Arts", distance: 300 },
        { name: "Engineering", shortName: "Eng", distance: 400 },
        { name: "Science", shortName: "Sci", distance: 500 },
    ];

    return (
        <View className="flex flex-col justify-between h-full">
            <View className="bg-blue-500">
                <Text className="text-white text-xl font-bold">Bus Stops</Text>
            </View>
            <View className="flex justify-between flex-row px-3 py-1">
                <TextInput
                    onChangeText={handleSearchTextChange}
                    className="border-2 rounded-2xl w-4/5 p-2"
                    placeholder="Select Bus Stops or Buildings"
                />
                <Button title="Filter" />
            </View>
            <View className="h-5/6">
                {busStops.map((busStop) => (
                    <BusStop
                        key={busStop.shortName}
                        name={busStop.name}
                        shortName={busStop.shortName}
                        distance={busStop.distance}
                    />
                ))}
            </View>
            <View className="absolute w-8 h-8 bg-blue-600 "></View>;
        </View>
    );
}

type BusStopProps = {
    name: string;
    shortName: string;
    distance: number;
};
const BusStop = ({ name, shortName, distance }: BusStopProps) => {
    const [isFavourited, setIsFavourited] = useState(false);
    const [isBusStopInformationOpen, setIsBusStopInformationOpen] = useState(false);

    const toggleIsFavourite = () => {
        setIsFavourited(!isFavourited);
        console.log(isFavourited);
    };

    const toggleBusStopInformation = () => {
        setIsBusStopInformationOpen(!isBusStopInformationOpen);
    };

    const tabs = [
        { name: "Home", icon: "home" },
        { name: "Favourites", icon: "star" },
        { name: "Settings", icon: "settings" },
        { name: "Profile", icon: "profile" },
        { name: "Logout", icon: "logout" },
    ];

    const handleTabPress = ({ name }: { name: string }) => {
        console.log(name);
    };

    const timings = [
        { time: "12:00", bus: "A1" },
        { time: "12:30", bus: "A2" },
        { time: "13:00", bus: "A3" },
    ];

    const isToggledClass = isFavourited ? "bg-blue-500" : "bg-gray-500";

    return (
        <TouchableOpacity onPress={toggleBusStopInformation}>
            <View className="flex flex-col">
                <View className="flex flex-row justify-between border-b-2 mt-2">
                    <TouchableOpacity className="ml-2" onPress={toggleIsFavourite}>
                        <View className={`w-4 h-4 rounded-full ${isToggledClass}`}></View>
                    </TouchableOpacity>
                    <View className="flex w-8/12">
                        <View className="flex flex-row">
                            <Text className=" pr-2">{name}</Text>
                            <Text className=" bg-gray-500 rounded-xl text-white">{distance}m</Text>
                        </View>
                        <Text>{shortName}</Text>
                    </View>
                    <Button title="Refresh" />
                </View>
                {isBusStopInformationOpen && (
                    <View>
                        {timings.map((timing) => (
                            <View>
                                <Text>{timing.time}</Text>
                                <Text>{timing.bus}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
            <View className="flex flex-row justify-between mb-3">
                {tabs.map((tab) => (
                    <TouchableOpacity onPress={() => handleTabPress(tab)}>
                        <Text>{tab.icon}</Text>
                        <Text>{tab.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </TouchableOpacity>
    );
};
