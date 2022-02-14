import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const Home = () => {
  return (
   
    <View>
      <Text>Home</Text>
      <Image 
      style={{height: 250, width: 250}}
      source={{uri: "https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg"}}/>
      <Button onPress={() => alert("FINALLY")}>YAAAS</Button>
      
    </View>
    
  )
}

export default Home