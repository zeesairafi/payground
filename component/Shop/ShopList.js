
import React from 'react'
import shopStore from '../../sores/shopeStore'
import ShopItem from "./ShopItem"
import { observer } from 'mobx-react'
import { Container, Heading } from 'native-base'



const ShopList = ({ navigation }) => {
    const shopList = shopStore.shops.map((shop) => (
        <ShopItem key={shop._id} shop={shop} navigation={navigation}/>
    )) 
  return (
      <Container style={styles.Container}> 
      <Heading mb="2" size="md"> Shops </Heading>
      {shopList}
      </Container>
  )
}

export default observer (ShopList)
const styles = StyleSheet.create({})