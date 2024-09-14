import React, {useMemo} from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';
import AppBar from '../components/AppBars/AppBar';
import DeleteCard from '../components/Cards/DeleteCard';

interface Product {
  id: string;
  name: string;
  price: string;
}

const CartScreen: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);

  const renderItem = useMemo(() => {
    return ({item}: {item: Product}) => (
      <DeleteCard item={item} Itemid={item.id} />
    );
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppBar Name={'Add to Cart'} />
      <View className="p-[10px]">
        <FlatList
          data={products}
          keyExtractor={(item: Product) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
