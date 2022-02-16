import { Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
    const navigation = useNavigation()
  return (
  <Button onPress={() => navigation.navigate("Home")}>Cart</Button>
  )
}

export default CartIcon

const styles = StyleSheet.create({})