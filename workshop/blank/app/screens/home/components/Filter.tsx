import { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Filter = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (text: string) => {
        setSearchText(text);
        console.log(searchText);
    };

    return (
        <View className="flex justify-between flex-row px-3 py-1">
            <TextInput
                onChangeText={handleSearchTextChange}
                className="border-2 rounded-2xl w-4/5 p-2"
                placeholder="Select Bus Stops or Buildings"
            />
            <Button title="Filter" />
        </View>
    );
};

export default Filter;
