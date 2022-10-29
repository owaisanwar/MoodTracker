import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { MoodOptionType } from '../types';
import { theme } from '../theme';
import Reanimated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
const moodOptions: MoodOptionType[] = [
    { emoji: '🧑', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
    onHandleSelect: (moodOption: MoodOptionType) => void
}

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const imageSrc = require('../../assets/butterflies.png');


export const MoodPicker: React.FC<MoodPickerProps> = ({ onHandleSelect }) => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>()
    const [hasSelected, setHasSelected] = React.useState<boolean>(false);
    const buttonStyles = useAnimatedStyle(() => ({
        opacity: selectedMood ? withTiming(1) : withTiming(0.5),
        transform: [{
            scale: selectedMood ? withTiming(1) : 0.8
        }]
    }), [selectedMood])
    const onSelect = React.useCallback(() => {
        if (selectedMood) {
            onHandleSelect(selectedMood);
            setSelectedMood(undefined)
            setHasSelected(true)
        }
    }, [onHandleSelect, selectedMood])

    if (hasSelected) {
        return (
            <View style={styles.moodContainer}>
                <Image source={imageSrc} />
                <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
                    <Text style={styles.buttonText}>Choose another</Text>
                </Pressable>
            </View>
        )
    }

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
            <ReanimatedPressable style={[styles.button, buttonStyles]} onPress={onSelect}>
                <Text style={styles.buttonText}>Choose</Text>
            </ReanimatedPressable>
        </View>
    )
}

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // paddingHorizontal: 20,
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
        fontSize: 10,
        textAlign: 'center',
        fontFamily: theme.fontFamilyBold,
        letterSpacing: 1
    },
    moodContainer: {
        height: 240,
        alignItems: 'center',
        marginHorizontal: theme.space10,
        justifyContent: 'space-around',
        borderWidth: 2,
        borderRadius: theme.space12,
        borderColor: theme.colorPurple,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    headingText: {
        fontSize: theme.space18,
        // paddingTop: theme.space10,
        letterSpacing: 1.25,
        color: theme.colorWhite,
        fontFamily: theme.fontFamilyBold
    },
    button: {
        backgroundColor: theme.colorPurple,
        height: 40,
        width: 150,
        borderRadius: 25,
        // paddingVertical: theme.space10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.space14 / 2
    },
    buttonText: {
        fontFamily: theme.fontFamilyBold,
        color: theme.colorWhite,
        fontSize: theme.space14,
        textAlign: "center"
    }
})
