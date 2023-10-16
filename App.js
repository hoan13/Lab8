import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lab8 from "./Lab8";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer StyleSheet>
      <Stack.Navigator>
        <Stack.Screen
          name="lab8"
          component={Lab8}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}