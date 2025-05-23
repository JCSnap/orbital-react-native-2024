import { View, Text, TouchableOpacity } from 'react-native';

const NavigationBar = () => {
  const pages = [
    {
      name: 'Home',
      icon: require('../../assets/favicon.png'),
    },
    {
      name: 'Routes',
      icon: require('../../assets/favicon.png'),
    },
    {
      name: 'Map',
      icon: require('../../assets/favicon.png'),
    },
    {
      name: 'Settings',
      icon: require('../../assets/favicon.png'),
    },
    {
      name: 'Profile',
      icon: require('../../assets/favicon.png'),
    },
  ];
  return (
    <View className="mb-6 w-full flex-row items-center justify-between border-t border-gray-300 px-6 py-1">
      {pages.map((page) => (
        <TouchableOpacity key={page.name}>
          <Text>{page.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationBar;
