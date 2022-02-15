import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'

//Components
import Home from "../Home"
import ShopDetail from '../Shop/ShopDetail'
import ShopList from './ShopList'
import CartCreation from '../Cart/CartIcon'
 
const StackNavigator = () => {
    const {Navigator, Screen} = createStackNavigator()
  return (

 <Navigator initialRouteName="Home" >
       <Screen name="Home" component ={Home} options={{
           headerShown: false
       }}/>
       <Screen name="Shops" component={ShopList}
       options={{
        headerStyle: {
            backgroundColor: "grey",
        }
       }}/>
       <Screen name="ShopDetail" component={ShopDetail} options={({ route }) => ({ title: route.params.shop.name, headerRight: <Button>Hello</Button>,})}/>

   </Navigator>
  )
}

export default StackNavigator

{/* <Navigator screenOptions={{"h"}}>
    <Screen name="h"component={Home} options={{title: "h"}}></Screen>
</Navigator> */}

