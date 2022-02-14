import { Button, NativeBaseProvider } from 'native-base';
import { View } from 'react-native';
import Home from './component/Home';
import ShopList from './Shop/index'
import ShopItem from './Shop/ShopItem';

export default function App() {
  return (
    <NativeBaseProvider>
    <View >
      
      <Home/>
    <ShopItem/>
    </View>
   
   
    </NativeBaseProvider>
  );
}


