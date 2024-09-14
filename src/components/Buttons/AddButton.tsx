import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-lg mt-[9px] px-[18px] py-[10px] items-center justify-center bg-white"
    >
      <Text className="text-[#8a8787]">Add Items</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
