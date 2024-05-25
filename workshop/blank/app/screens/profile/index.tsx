import { View, Text } from "react-native";
import MapView from "react-native-maps";
import Button from "@/components/button";

const Profile = () => {
    return (
        <View className="flex flex-col">
            <MapView
                initialRegion={{
                    latitude: 1.3007132,
                    longitude: 103.7618804,
                    latitudeDelta: 0.01022,
                    longitudeDelta: 0.01021,
                }}
                className="h-1/2 w-full"
            />
            <Button type="danger" title="Logout" onPress={() => console.log("Delete Account")} size="sm" />
            <Button type="primary" title="Do Something" onPress={() => console.log("Do something")} size="lg" />
        </View>
    );
};

export default Profile;
