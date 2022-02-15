
import { Button } from 'native-base'
import React from 'react'
import Home from './Home/Home'
import ShopDetail from './ShopDetail'
import ShopList from './ShopList'
 
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

