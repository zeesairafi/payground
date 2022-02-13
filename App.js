import { Button, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      
      <Home/>
      <Button onPress={() => alert("DONE")}>HELLO</Button>
    </View>
    </NativeBaseProvider>
   
  );
}


