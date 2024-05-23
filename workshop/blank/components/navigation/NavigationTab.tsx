import { View, Text, TouchableOpacity } from "react-native";

const NavigationTab = () => {
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

    return (
        <View className="flex flex-row justify-between mb-3">
            {tabs.map((tab) => (
                <TouchableOpacity onPress={() => handleTabPress(tab)}>
                    <Text>{tab.icon}</Text>
                    <Text>{tab.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default NavigationTab;
