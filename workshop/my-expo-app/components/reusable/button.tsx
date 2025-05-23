import { View, Text, TouchableOpacity } from 'react-native';

const NiceButtonWithCoolColours = ({
  title,
  variant,
}: {
  title: string;
  variant: 'primary' | 'secondary';
}) => {
  return (
    <TouchableOpacity
      className={`h-10 w-full ${variant === 'primary' ? 'bg-blue-500' : 'bg-red-500'}`}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default NiceButtonWithCoolColours;
