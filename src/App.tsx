import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";
import { AppProvider } from "./App.provider";
import { Platform, UIManager } from 'react-native';
import 'react-native-gesture-handler'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  return (
    <AppProvider>
      {/* <GestureHandlerRootView style={{ flex: 1 }} > */}
      <NavigationContainer >
        <BottomTabsNavigator />
      </NavigationContainer>
      {/* </GestureHandlerRootView> */}
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  }
})
