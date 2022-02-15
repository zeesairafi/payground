
import React from 'react'
import shopStore from '../../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'
import { Container, Heading, HStack } from 'native-base'
import { observer } from 'mobx-react'


const ShopList = () => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop} navigation={Navigation}/>
    )) 
  return (
      <Container style={styles.Container}> 
      <Heading mb="2" size="md"> Shops </Heading>
      {shopList}
      </Container>
}

export default observer (ShopList)
const styles = StyleSheet.create({})