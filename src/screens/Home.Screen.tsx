import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { MoodPicker } from "../components/MoodPicket";
import { theme } from "../theme";
import { useAppContext } from "../App.provider";
const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {
    const { handleSelectMood } = useAppContext();
    return (
        <ImageBackground
            style={styles.container}
            source={{ uri: imageUrl }}
        >
            <MoodPicker key={'mood-picker'} onHandleSelect={handleSelectMood} />
        </ImageBackground>
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
