import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <View>
      <Text>{product.name}]</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})