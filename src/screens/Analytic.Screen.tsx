import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../App.provider";
import { VictoryPie } from 'victory-native'
import { theme } from "../theme";
export const Analytic: React.FC = () => {
    const appContext = useAppContext();
    const { moodList } = appContext;
    let appearence: any = {};
    moodList.forEach(item => {
        if (item.mood.emoji in appearence) {
            appearence[item.mood.emoji] = appearence[item.mood.emoji] + 1;
        } else {
            appearence[item.mood.emoji] = 1;
        }
    })
    console.log(appearence)
    const chartData = moodList.map(item => {
        return {
            x: item.mood.emoji,
            y: appearence[item.mood.emoji],
        }
    });
    console.log(chartData);
    // console.log(moodList);
    return (
        <View style={styles.container}>
            <VictoryPie
                labelRadius={80}
                radius={150}
                innerRadius={50}
                data={chartData}
                colorScale={[
                    theme.colorPurple,
                    theme.colorLavender,
                    theme.colorBlue,
                    theme.colorGrey,
                    theme.colorWhite,
                ]}
                style={{ labels: { fontSize: 30 } }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
