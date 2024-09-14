import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppBarProps {
  Name: string;
}

const AppBar: React.FC<AppBarProps> = ({ Name }) => {
  return (
    <View className='h-[70px] bg-[#F47458] rounded-b-3xl items-center justify-center'>
      <Text className='font-semibold text-base text-white'>{Name}</Text>
    </View>
  );
};

export default AppBar;
