import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
   
    <View>
      <Text>Home</Text>
      <Image 
      style={{height: 250, width: 250}}
      source={{uri: "https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg"}}/>
      <Button onPress={() => alert("DONE")}>HELLO</Button>
      
    </View>
    
  )
}

export default Home