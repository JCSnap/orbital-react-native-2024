import { View, Text } from "react-native";
import NavigationTab from "@/components/navigation/NavigationTab";
import MapView from "react-native-maps";

const ProfileScreen = () => {
    return (
        <View className="flex justify-between flex-col h-full bg-black">
            <Text>Profile</Text>
            <MapView
                initialRegion={{
                    latitude: 1.3018749,
                    longitude: 103.7677321,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0221,
                }}
                style={{ width: "100%", height: "50%" }}
            />
            <NavigationTab />
        </View>
    );
};

export default ProfileScreen;
