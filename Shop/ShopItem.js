
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { HStack } from 'native-base';


const ShopItem = ({shop}) => {
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">  
      <Text>{shop.name}</Text>
      <Image source={{uri: baseURL + shop.image}} style={styles.shopImage}/>
    <Text mx="2">{shop.name}</Text>
    </HStack>
  )
}

export default ShopItem

const styles = StyleSheet.create({});