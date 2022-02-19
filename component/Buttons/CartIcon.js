import {  StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'
import cartStore from '../../sores/cartStore'
import { Badge } from 'native-base'

const CartIcon = () => {
    const navigation = useNavigation()
    let total = cartStore.items.forEach((item) =>(total = total + item.quantity))
  return (
    <>
    <Badge>{total}</Badge>
    {

      total === 0 ? (

    
    <EvilIconsIcon name="cart" size={40} color="white"/> ) : (
    <EntypoIcon name="shopping-cart" size={30} color="white"/>
    )}
    </>

  )}
  // <Button onPress={() => navigation.navigate("Cart")}>Cart</Button>

  


export default CartIcon

const styles = StyleSheet.create({})