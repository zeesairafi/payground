import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import shopStore from '../sores/shopeStore'
import { SafeAreaView } from 'react-native-safe-area-context'
import { observer } from 'mobx-react-lite'
import { Button, HStack } from 'native-base'

const ShopDetail = ({route}) => {
  if(shopStore.loading) return <loading/>
    const shop = shopStore.shops[1]
    const types = shop.type.map((item) => <Text key={item}>{item}</Text>)
    // const products = shop.products.map((product) => (
    //     <ProductItem key={product._id} product={product}/>
    // ))
  return (
      <SafeAreaView>
    <View style={styles.titleView}>
      <Text style={styles.title}>{shop.name}</Text>
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

