import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MoodPicker } from "../components/MoodPicket";
import { theme } from "../theme";
import { MoodOptionTypeWithDate, MoodOptionType } from '../types';
export const Home: React.FC = () => {
    const [moodList, setMoodList] = React.useState<MoodOptionTypeWithDate[]>([])
    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [...current, { mood: selectedMood, date: Date.now() }])
    }, [setMoodList])
    return (
        <View style={styles.container}>
            <MoodPicker key={'mood-picker'} onHandleSelect={handleSelectMood} />
            {moodList.map(item =>
                <Text key={item.date}>{item.mood.emoji} {new Date(item.date).toString()}</Text>)}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    moodContainer: {
        height: '35%',
        alignItems: 'center',
        marginHorizontal: theme.space10,
        justifyContent: 'space-around',
        borderWidth: 2,
        borderRadius: theme.space12,
        borderColor: theme.colorPurple
    },
    moodList: {
        flexDirection: "row"
    }

})
