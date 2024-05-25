import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome6";

const NavigationTab = () => {
    const tabs = [
        { name: "Home", icon: "bus-simple", path: "/home-screen" },
        { name: "Profile", icon: "book-medical", path: "/profile-screen" },
        { name: "Settings", icon: "bus-simple", path: "/settings-screen" },
        { name: "Logout", icon: "bus-simple", path: "/logout-screen" },
        { name: "Favourites", icon: "bus-simple", path: "/favourites-screen" },
    ];

    return (
        <View className="flex flex-row justify-between mb-3">
            {tabs.map((tab) => (
                <Link href={tab.path} className="flex flex-col">
                    <View>
                        <Icon name={tab.icon} size={30} />
                        <Text>{tab.name}</Text>
                    </View>
                </Link>
            ))}
        </View>
    );
};

export default NavigationTab;
