import React, { useState, useCallback } from 'react';
import { View, FlatList, Text , SafeAreaView , ToastAndroid, Keyboard, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query'; 
import AppBar from '../components/AppBars/AppBar';
import { addProduct } from '../slices/productSlice';
import Textinput from '../components/TextInputs/Textinput';
import AddButton from '../components/Buttons/AddButton';


interface Product {
  id: string;
  name: string;
  price: string;
}

const MainScreen: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);

  const handleAddProduct = useCallback(() => {
    if (productName.trim() === '' || productPrice.trim() === '') return;

    const newProduct: Product = { 
      id: Date.now().toString(), 
      name: productName, 
      price: productPrice 
    };
    dispatch(addProduct(newProduct));

    setProductName('');
    setProductPrice('');
    Keyboard.dismiss();
    ToastAndroid.show('Product Added', ToastAndroid.SHORT);
  }, [dispatch, productName, productPrice]);

  return (
    <SafeAreaView className='bg-white flex-1'>
      <AppBar Name={'Ecommerce App'} />
      <View className='p-[15px]'>
        <View className="w-full flex-col justify-between items-center bg-[#F47458] rounded-2xl p-4">
          <View className="w-full items-center justify-center">
            <Text className="text-white">Add Items</Text>
          </View>

          <Textinput
            value={productName}
            onChangeText={setProductName}
            placeholder="Enter Product Name"
          />

          <Textinput
            value={productPrice}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, '');
              setProductPrice(numericValue);
            }}
            placeholder="Enter Price"
            keyboardType="numeric" 
          />

          <AddButton className="mt-6" onPress={handleAddProduct} />
        </View>

        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View className='w-full bg-[#F47458] h-[50] rounded-2xl mt-[10px] justify-center'>
              <View className='flex-row  items-center justify-between p-[10]'>
                <Text className='text-white'>{item.name}</Text>
                <Text className='text-white'>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
