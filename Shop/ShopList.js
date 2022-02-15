import { View, Text } from 'react-native'
import React from 'react'
import shopStore from '../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'


const ShopList = () => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop}/>
    )) 
  return (
    <View>
      {shops}
    </View>
  )
}

export default observer (ShopList)