import { View, Text } from 'react-native'
import React from 'react'
import shopStore from '../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'
import { HStack } from 'native-base'
import { observer } from 'mobx-react'


const ShopList = () => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop}/>
    )) 
  return (
      <HStack W="100%" justifyContent="space-between" alignItems="center">
          <Text mx="2">{shop.name}</Text>
    
    </HStack>
  )
}

export default observer (ShopList)