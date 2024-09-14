import React, { useCallback } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../slices/productSlice';
import DeleteButton from '../Buttons/DeleteButton';

interface DeleteCardProps {
  item: {
    id: string;
    name: string;
    price: string;
  };
  Itemid: string;
}

const DeleteCard: React.FC<DeleteCardProps> = ({ item, Itemid }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
      ToastAndroid.show('Product Deleted', ToastAndroid.SHORT);
    },
    [dispatch]
  );

  return (
    <View>
      <View className="p-[10px]">
        <View className="w-full h-[55px] rounded-2xl justify-center bg-[#F47458] relative">
          <View className="flex-row items-center justify-between p-[10px] border rounded-xl border-[#F47458]">
            <Text className="text-white">{item.name}</Text>
            <Text className="text-white">{item.price}</Text>
          </View>
          <DeleteButton onPress={() => handleDeleteProduct(Itemid)} />
        </View>
      </View>
    </View>
  );
};

export default DeleteCard;

const styles = StyleSheet.create({});
