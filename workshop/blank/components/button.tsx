import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    type: "primary" | "secondary" | "danger";
    size: "sm" | "md" | "lg";
};
const Button = ({ type, title, onPress, size }: ButtonProps) => {
    const backgroundColour = type === "primary" ? "bg-blue-500" : type === "secondary" ? "bg-gray-500" : "bg-red-500";
    const width = size === "sm" ? "w-1/4" : size === "md" ? "w-1/2" : "w-full";
    const height = size === "sm" ? "h-8" : size === "md" ? "h-12" : "h-16";
    const textSize = size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-lg";
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`rounded-xl ${backgroundColour} ${width} ${height} p-2 flex justify-center items-center`}
        >
            <Text className={`text-white ${textSize}`}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
