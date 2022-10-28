import React from "react";
import { StyleSheet, View } from "react-native";
import { MoodPicker } from "../components/MoodPicket";
import { theme } from "../theme";
import { useAppContext } from "../App.provider";
export const Home: React.FC = () => {
    const { handleSelectMood } = useAppContext();
    return (
        <View
            style={styles.container}>
            <MoodPicker key={'mood-picker'} onHandleSelect={handleSelectMood} />
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
