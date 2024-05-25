import { View } from "react-native";
import { Link } from "expo-router";
import Header from "./components/Header";
import Filter from "./components/Filter";
import BusStops from "./components/BusStops";
import NavigationTab from "@/components/navigation/NavigationTab";
import MapIcon from "./components/MapIcon";
import Toast from "react-native-toast-message";
import { useState, useEffect } from "react";

type BusStopDetails = {
    message: string;
    busStopDetails: {
        blueBus: { name: string; busStopId: string }[];
        redBus: { name: string; busStopId: string }[];
        yellowBus: { name: string; busStopId: string }[];
        greenBus: { name: string; busStopId: string }[];
        brownBus: { name: string; busStopId: string }[];
    };
};

type BusStop = {
    name: string;
    busStopId: string;
};

enum BusType {
    ALL = "all",
    BLUE = "blueBus",
    RED = "redBus",
    YELLOW = "yellowBus",
    GREEN = "greenBus",
    BROWN = "brownBus",
}

export default function Home() {
    const [busStopDetails, setBusStopDetails] = useState<BusStopDetails | null>(null);
    const [busFilterSelected, setBusFilterSelected] = useState<BusType>(BusType.ALL);

    useEffect(() => {
        const fetchBusStopDetails = async () => {
            try {
                const response = await fetch(
                    "https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod/bus-stop-details"
                );
                const data = await response.json();
                setBusStopDetails(data);
            } catch {
                Toast.show({
                    type: "error",
                    text1: "Error fetching data 🚨",
                });
            }
        };
        fetchBusStopDetails();
    }, []);

    const getUniqueBusStops = (details: BusStopDetails) => {
        const uniqueBusStops = new Set<BusStop>();

        Object.values(details.busStopDetails).forEach((busArray) => {
            busArray.forEach((busStop) => {
                uniqueBusStops.add(busStop);
            });
        });

        return Array.from(uniqueBusStops);
    };

    const getFilteredBusStops = () => {
        if (!busStopDetails) return [];

        if (busFilterSelected === BusType.ALL) {
            return getUniqueBusStops(busStopDetails);
        } else {
            return busStopDetails.busStopDetails[busFilterSelected];
        }
    };

    const filteredBusStopDetails = getFilteredBusStops();
    console.log(filteredBusStopDetails);

    return (
        <View className="flex flex-col justify-between h-full">
            <View className="z-50">
                <Toast />
            </View>
            <Header />
            <Filter />
            <BusStops />
            <Link href="/profile-screen">Profile</Link>
            <NavigationTab />
            <MapIcon />
        </View>
    );
}
