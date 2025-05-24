import { Text } from 'react-native';

const CustomText = ({ children, size = 'lg' }: { children: string; size?: 'lg' | 'sm' }) => {
  return (
    <Text className={`${size === 'lg' ? 'text-lg' : 'text-sm'} text-gray-500`}>{children}</Text>
  );
};

export default CustomText;
