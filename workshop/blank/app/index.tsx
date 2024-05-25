import { View } from "react-native";
import Home from "./home-screen";

export default function Index() {
    return (
        <View className="flex flex-col justify-between h-full">
            <Home />
        </View>
    );
}
