import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/views/IndexScreen";
import WordScreen from "./src/views/WordScreen";
import OrderedWordsScreen from "./src/views/OrderedWordsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page" screenOptions={{headerTitleAlign:"center"}}>
        <Stack.Screen name="Home Page" component={IndexScreen}/>
        <Stack.Screen name="Random Words" component={WordScreen} />
        <Stack.Screen name="Ordered Words" component={OrderedWordsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
