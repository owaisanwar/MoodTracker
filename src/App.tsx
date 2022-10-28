import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";

export const App: React.FC = () => {
  return (
    <NavigationContainer >
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  }
})
