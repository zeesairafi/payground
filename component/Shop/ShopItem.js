
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react'
import { baseURL } from '../../sores/api';
import { SafeAreaView } from 'react-native-safe-area-context';


const ShopItem = ({ navigation, shop }) => {
  console.log(" baseURL + shop.image",  baseURL + shop.image)
  return (
    <SafeAreaView style={{ flex: 1, flexDirection:"column", margin:"50px"}}>
      <Pressable
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        {/* shop: shop => data from props */}

      <Image source={{uri: shop.image}} style={styles.shopImage}/>
    <Text mx="2">{shop.name}</Text>
    
    </Pressable>
    </SafeAreaView>
  )
}

export default ShopItem

const styles = StyleSheet.create({
  shopImage: {
    height: 100,
    width: 100,

  }
});