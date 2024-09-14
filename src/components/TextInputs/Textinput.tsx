import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextinputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const Textinput: React.FC<TextinputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'#9c9796'}
      className="rounded-lg bg-white mt-[7px] p-[7px] w-full"
      style={{ color: '#8a8787' }}
    />
  );
};

export default Textinput;

const styles = StyleSheet.create({});
