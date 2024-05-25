import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
    type: "primary" | "secondary" | "danger";
    size: "sm" | "md" | "lg";
    text: string;
    onPress: () => void;
};
const Button = ({ type, size, text, onPress }: ButtonProps) => {
    const backgroundColour = type === "primary" ? "bg-blue-500" : type === "secondary" ? "bg-gray-300" : "bg-red-500";
    const textColour = type === "primary" ? "text-white" : type === "secondary" ? "text-black" : "text-white";
    const width = size === "sm" ? "w-1/4" : size === "md" ? "w-1/2" : "w-full";
    const height = size === "sm" ? "h-8" : size === "md" ? "h-10" : "h-12";
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`p-2 rounded-xl flex justify-center items-center ${backgroundColour} ${width} ${height}`}
        >
            <Text className={textColour}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
