import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'

//Components
import Home from "../Home"
import ShopDetail from '../Shop/ShopDetail'
import ShopList from '../Shop/ShopList'
import CartIcon from '../Buttons/CartIcon'
import CartList from '../Cart/CartList'
 
const StackNavigator = () => {
    const {Navigator, Screen} = createStackNavigator()
 console.log(Navigator)
  return (

 <Navigator initialRouteName="Home"
 screenOptions={{
     headerStyle: { 
         backgroundColor: "blue",

     },
     headerTintColor: "white",
 }} >
       <Screen name="Home" component ={Home} options={{
           headerShown: false
       }}/>
       <Screen name="Shops" component={ShopList}
       options={{
        headerStyle: "All Shops"
        
       }}/>
       <Screen name="ShopDetail" 
       component={ShopDetail} 
       options={({ route }) => ({ title: route.params.shop.name, 
       headerRight: () => <CartIcon/> })}/>

       <Screen name="Cart"
       component={CartList}/>

   </Navigator>
  )
}

export default StackNavigator

{/* <Navigator screenOptions={{"h"}}>
    <Screen name="h"component={Home} options={{title: "h"}}></Screen>
</Navigator> */}

