import { View, Text } from 'react-native'
import React from 'react'
import shopStore from '../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'


const ShopItem = () => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop}/>
    )) 
  return (
    <View>
      <Text>ShopItem</Text>
     {shopList}
    </View>
  )
}

export default observer (ShopItem)