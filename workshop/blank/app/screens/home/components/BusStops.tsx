import { View, Text, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";

const BusStops = () => {
    const busStops = [
        { name: "University Town", shortName: "UTown", distance: 190 },
        { name: "Central Library", shortName: "CL", distance: 200 },
        { name: "Arts", shortName: "Arts", distance: 300 },
        { name: "Engineering", shortName: "Eng", distance: 400 },
        { name: "Science", shortName: "Sci", distance: 500 },
    ];

    return (
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
    );
};

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

    const timings = [
        { time: "12:00", bus: "A1" },
        { time: "12:30", bus: "A2" },
        { time: "13:00", bus: "A3" },
    ];

    const getBusStopDetails = async () => {
        try {
            const response = await fetch(
                "https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod/bus-stop-details"
            );
            const data = await response.json();
            console.log(data.busStopDetails.blueBus);
        } catch (error) {
            console.error(error);
        }
    };

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
                    <Button title="Refresh" onPress={getBusStopDetails} />
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
