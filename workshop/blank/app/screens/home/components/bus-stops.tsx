import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Toast from "react-native-toast-message";

type BusStop = {
    name: string;
    busStopId: string;
};
const BusStops = () => {
    const [busStops, setBusStops] = useState<BusStop[] | null>(null);

    useEffect(() => {
        // Fetch bus stops
        // send a get request to /bus-stop-details at https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod
        const fetchBusStops = async () => {
            try {
                const response = await fetch(
                    "https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod/bus-stop-details"
                );
                const data = await response.json();
                const busStops = data.busStopDetails.blueBus;
                setBusStops(busStops);
            } catch (error) {
                console.error("Error fetching bus stops", error);
                Toast.show({
                    type: "error",
                    text1: "Error fetching bus stops",
                });
            }
        };
        fetchBusStops();
    }, []);

    const busStops1 = [
        { name: "Bus Stop 1", shortName: "BS1", distance: 100 },
        { name: "Bus Stop 2", shortName: "BS2", distance: 200 },
        { name: "Bus Stop 3", shortName: "BS3", distance: 300 },
    ];

    return (
        <ScrollView className="h-5/6">
            {busStops &&
                busStops.map((busStop) => (
                    <BusStop key={busStop.name} name={busStop.name} shortName={busStop.busStopId} />
                ))}
        </ScrollView>
    );
};

type BusStopProps = {
    name: string;
    shortName: string;
};

const BusStop = ({ name, shortName }: BusStopProps) => {
    const [isFavourited, setIsFavourited] = useState(false);
    const [isBusStopInformationOpen, setIsBusStopInformationOpen] = useState(false);

    const toggleIsFavourite = () => {
        setIsFavourited(!isFavourited);
        console.log(isFavourited);
    };

    const toggleBusStopInformation = () => {
        setIsBusStopInformationOpen(!isBusStopInformationOpen);
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
                            <Text className=" pr-2 truncate">{name}</Text>
                            <Text className=" bg-gray-500 rounded-xl text-white">100 m</Text>
                        </View>
                        <Text>{shortName}</Text>
                    </View>
                    <Button title="Refresh" />
                </View>
                {isBusStopInformationOpen && <BusStopTimings timings={timings} />}
            </View>
        </TouchableOpacity>
    );
};

type BusStopTimingsProps = {
    timings: {
        time: string;
        bus: string;
    }[];
};
const BusStopTimings = ({ timings }: BusStopTimingsProps) => {
    return (
        <View>
            {timings.map((timing) => (
                <View>
                    <Text>{timing.time}</Text>
                    <Text>{timing.bus}</Text>
                </View>
            ))}
        </View>
    );
};

export default BusStops;
