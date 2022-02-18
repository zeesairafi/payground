import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'native-base'



const Home = () => {
  return (
    <ImageBackground
    style={styles.background}
    source={{
      uri: 'https://image.shutterstock.com/image-photo/shelves-colorful-wool-yarn-knitting-260nw-700317697.jpg',
    }}
  >
    <View
      style={styles.titleView}
    >
      <Text style={styles.title}>
        Stores
      </Text>
    </View>
    <Button >Button</Button>
  </ImageBackground>
  
  )}

export default Home

const styles = StyleSheet.create({
    background: { flex: 1, width: '100%', height: '100%' },
    title: { color: '#000', fontSize: 38, textAlign: 'center' },
    titleView: { height: '40%', alignItems: 'center', justifyContent: 'center' }
})