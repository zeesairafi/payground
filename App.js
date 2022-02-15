import { Button, NativeBaseProvider } from 'native-base';
import { View } from 'react-native';
import Home from './component/Home/Home';
import ShopList from './Shop/index'
import ShopItem from './Shop/ShopItem';

export default function App() {
  return (
    <NativeBaseProvider>
   
      
      <Home/>
      <ShopList/>
    
  
   
    </NativeBaseProvider>
  );
}


