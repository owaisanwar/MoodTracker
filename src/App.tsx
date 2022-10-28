import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";
import { AppProvider } from "./App.provider";
export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer >
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  }
})
