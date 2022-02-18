
import React from 'react'
import shopStore from '../../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'
import { Container, Heading } from 'native-base'
import { StyleSheet } from 'react-native'



const ShopList = ({ navigation }) => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop} navigation={navigation}/>
        )) 
        console.log("🚀 ~ file: ShopList.js ~ line 13 ~ ShopList ~ shopStore.shops", shopStore.shops)
  return (
      <Container style={styles.Container}> 
      <Heading mb="2" size="md"> Shops </Heading>
      {shopList}
      </Container>
  )
}

export default observer (ShopList)
const styles = StyleSheet.create({})