import { Button, NativeBaseProvider } from 'native-base';
import { View } from 'react-native';
import Home from './component/Home';
import ShopList from './Shop/index'

export default function App() {
  return (
    <NativeBaseProvider>
    <View >
      
      <Home/>
      {/* <ShopList/> */}
    </View>
   
   
    </NativeBaseProvider>
  );
}


