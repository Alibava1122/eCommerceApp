import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// Define the props type
interface DeleteButtonProps {
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute top-[-6px] right-[-7px] w-[20px] h-[20px] rounded-full bg-red-500 flex items-center justify-center"
    >
      <Icon name="cross" size={19} color={'#FFFFFF'} />
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({});
