import React, { useState } from "react";
import { View } from "react-native";
import Header from "./components/header";
import BusStops from "./components/bus-stops";
import Filter from "./components/filter";
import NavigationTab from "@/components/navigation/NavigationTab";
import MapIcon from "./components/map-icon";
import Toast from "react-native-toast-message";

const Home = () => {
    return (
        <View className="flex flex-col justify-between h-full">
            <View className="z-50">
                <Toast />
            </View>
            <Header />
            <Filter />
            <BusStops />
            <NavigationTab />
            <MapIcon />
        </View>
    );
};

export default Home;
