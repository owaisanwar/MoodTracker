import React from "react";
import { StyleSheet, View } from "react-native";
import { MoodPicker } from "../components/MoodPicket";
import { theme } from "../theme";
import { MoodOptionTypeWithDate, MoodOptionType } from '../types';
import { MoodItemRow } from "../components/ItemRow";
export const Home: React.FC = () => {
    const [moodList, setMoodList] = React.useState<MoodOptionTypeWithDate[]>([])
    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [...current, { mood: selectedMood, date: Date.now() }])
    }, [setMoodList])
    return (
        <View
            style={styles.container}>
            <MoodPicker key={'mood-picker'} onHandleSelect={handleSelectMood} />
            {moodList.map(item =>
                <MoodItemRow item={item} key={item.date} />
                // <Text key={item.date}>{item.mood.emoji} {format(new Date(item.date), "dd MMM, yyyy 'at' h:mmaaa")}</Text>
            )}
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
    },
    moodItem: {
        marginTop: theme.space10,
        backgroundColor: theme.colorWhite,
        paddingHorizontal: theme.space14,
        flexDirection: 'row',
        paddingVertical: theme.space16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mood: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    emojiText: {
        fontSize: theme.space20 * 2,
    },
    moodDescription: {
        fontSize: 18,
        color: theme.colorPurple,
        fontWeight: 'bold',
    },
    moodDate: {
        textAlign: 'center',
        color: theme.colorLavender,
    },
})
