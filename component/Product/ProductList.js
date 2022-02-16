import { Text, View } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
    const productList = products.map(product => <ProductItem key={product._id}/>)
  return (
    <View>
      <Text>Producs</Text>
      {productList}
    </View>
  )
}

export default ProductList

