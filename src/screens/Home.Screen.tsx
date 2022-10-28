import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MoodPicker } from "../components/MoodPicket";
import { theme } from "../theme"
export const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.moodContainer}>
                <Text style={styles.headingText}>How are you right now?</Text>
                <MoodPicker key={'mood-picker'} />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Choose</Text>
                </Pressable>
            </View>
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
    headingText: {
        fontWeight: 'bold',
        fontSize: theme.space18,
        paddingTop: theme.space10,
        letterSpacing: 1.25
    },
    button: {
        backgroundColor: theme.colorPurple,
        height: 40,
        width: 150,
        borderRadius: 25,
        paddingVertical: theme.space10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.space14 / 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: theme.colorWhite,
        fontSize: theme.space14,
        textAlign: "center"
    }
})
