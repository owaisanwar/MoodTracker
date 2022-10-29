import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { History } from "./History.Screen";
import { Home } from "./Home.Screen";
import { Analytic } from "./Analytic.Screen";
import { Text } from "react-native";
import { AnalyticIcon, HomeIcon, ListIcon } from "../components/Icons";
import { theme } from "../theme";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: theme.colorBlue,
                tabBarInactiveTintColor: theme.colorGrey,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Home':
                            return <HomeIcon size={size} color={color} />
                        case 'History':
                            return <ListIcon size={size} color={color} />
                        case 'Analytic':
                            return <AnalyticIcon size={size} color={color} />
                    }
                }
            })
        }>
            <BottomTabs.Screen name="Home" component={Home} options={{
                title: 'Today\'s Mood'
            }} />
            <BottomTabs.Screen name="History" component={History} options={{
                title: "Past Moods"
            }} />
            <BottomTabs.Screen name="Analytic" component={Analytic} options={{
                title: "Fancy Graph"
            }} />
        </BottomTabs.Navigator>
    )
}
