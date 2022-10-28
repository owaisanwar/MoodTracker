import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MoodOptionType } from '../types';
const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>()

    return (
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
    )
}

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20
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
    }
})
