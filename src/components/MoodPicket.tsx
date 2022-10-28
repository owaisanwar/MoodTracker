import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MoodOptionType } from '../types';
import { theme } from '../theme';
const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
    onHandleSelect: (moodOption: MoodOptionType) => void
}
export const MoodPicker: React.FC<MoodPickerProps> = ({ onHandleSelect }) => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>()
    const onSelect = React.useCallback(() => {
        if (selectedMood) {
            onHandleSelect(selectedMood);
            setSelectedMood(undefined)
        }
    }, [onHandleSelect, selectedMood])
    return (
        <View style={styles.moodContainer}>
            <Text style={styles.headingText}>How are you right now?</Text>
            <View style={styles.moodOptions} >
                {moodOptions.map(option => (
                    <View key={option.emoji}>
                        <Pressable onPress={() => setSelectedMood(option)} style={[styles.moodItem, selectedMood?.emoji === option.emoji ? styles.selectedMoodItem : undefined]}>
                            <Text style={styles.moodText}>{option.emoji}</Text>
                        </Pressable>
                        <Text style={styles.selectedMoodDescription}>{option.emoji === selectedMood?.emoji ? selectedMood.description : undefined}</Text>
                    </View>
                ))}
            </View>
            <Pressable style={styles.button} onPress={onSelect}>
                <Text style={styles.buttonText}>Choose</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    moodText: {
        fontSize: 24,
    },
    moodItem: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 30
    },
    selectedMoodItem: {
        borderWidth: 2,
        backgroundColor: '#454C73',
        borderColor: '#fff',
    },
    selectedMoodDescription: {
        color: '#454C73',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    moodContainer: {
        height: '35%',
        alignItems: 'center',
        marginHorizontal: theme.space10,
        justifyContent: 'space-around',
        borderWidth: 2,
        borderRadius: theme.space12,
        borderColor: theme.colorPurple,

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
