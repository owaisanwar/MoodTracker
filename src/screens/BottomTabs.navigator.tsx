import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { History } from "./History.Screen";
import { Home } from "./Home.Screen";
import { Analytic } from "./Analytic.Screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home} />
            <BottomTabs.Screen name="History" component={History} />
            <BottomTabs.Screen name="Analytic" component={Analytic} />
        </BottomTabs.Navigator>
    )
}
