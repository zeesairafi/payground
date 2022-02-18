import { Image, SafeAreaView, Text, View, Button, HStack } from 'react-native'
import React from 'react'
import shopStore from '../../sores/shopeStore'
import { observer } from 'mobx-react'

import styles from './styles'
import ProductList from '../Product/ProductList'



const ShopDetail = ({ navigation,route }) => {
  if(shopStore.loading) return <Loading/>
    const shop = route.params.shop
    const types = shop.type.map((item) => <Text key={item}>{item}</Text>)
  
  return (
      <SafeAreaView>
    <View style={styles.titleView}>
      <Text style={styles.title}>{shop.name} {shop.title}</Text>
      <Image source={{uri: baseURL + shop.image}} style={styles.image}/>
      <HStack>{types}</HStack>
      <Button onPress={() => navigation.push("Home")}>Push</Button>
      <Button onPress={() => navigation.navigate("Home")}>Navigate</Button>
      <Button onPress={() => navigation.replace("Home")}>Replace</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <ProductList products={shop.products}/>
    </View>
    </SafeAreaView>
  )
}

export default observer(ShopDetail)

