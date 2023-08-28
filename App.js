

import Splash from './Screen/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './Screen/ProductDetail';
import ProductList from './Screen/ProductList';
import { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
const  [isLoading, setisLoading] = useState(true);

useEffect(() => {
setTimeout(()=> {
  setisLoading (false);
}, 2000) 
}, []);


return (
  <NavigationContainer  >
  {isLoading ? <Splash /> : <Stack.Navigator 
      screenOptions={{ headerShown: false }}>

      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>}
    
  </NavigationContainer>
);
}


