import { NativeBaseProvider } from "native-base";
import StackNavigator from "./component/Navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native"
import Home from "./component/Home";


export default function App() {
  return (
   <NavigationContainer>
     <NativeBaseProvider>
       {/* <Home /> */}
       <StackNavigator/>
     </NativeBaseProvider>
   </NavigationContainer>
  );
}


