import { NativeBaseProvider } from "native-base";
import StackNavigator from "./component/Navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
   <NavigationContainer>
     <NativeBaseProvider>
       <StackNavigator/>
     </NativeBaseProvider>
   </NavigationContainer>
  );
}


