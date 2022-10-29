import React from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation } from 'react-native';
// import format from 'date-fns/format';
import format from 'date-fns/format';
import { MoodOptionTypeWithDate } from '../types';
import { theme } from '../theme';
import { useAppContext } from '../App.provider';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Reanimated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
type MoodItemRowProps = {
    item: MoodOptionTypeWithDate,
};

const maxSwipe = 80

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
    const appContext = useAppContext();
    const translateX = useSharedValue(0);
    const handleDelteMood = React.useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        appContext.handleDeleteMood(item)
    }, [item, appContext])
    const deleteWithDelay = React.useCallback(() => {
        setTimeout(() => {
            handleDelteMood()
        }, 500)
    }, [handleDelteMood])
    const onGestureEvent = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
            // console.warn(event.translationX)
        },
        onEnd: event => {
            if (Math.abs(event.translationX) > maxSwipe) {
                translateX.value = withTiming(1000 * Math.sign(event.translationX));
                runOnJS(deleteWithDelay)();
            } else {
                translateX.value = withTiming(0);
            }
        }
    }, [])
    const cardStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }), [])

    return (
        <PanGestureHandler
            failOffsetY={1}
            activeOffsetX={[-5, 10]}
            onGestureEvent={onGestureEvent}
        >
            <Reanimated.View style={[styles.moodItem, cardStyle]}>
                <View style={styles.iconAndDescription}>
                    <Text style={styles.moodValue}>{item.mood.emoji}</Text>
                    <Text style={styles.moodDescription}>{item.mood.description}</Text>
                </View>
                <Text style={styles.moodDate}>
                    {format(new Date(item.date), "dd MMM, yyyy 'at' h:mmaaa")}
                </Text>
                <Pressable onPress={handleDelteMood}>
                    <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
            </Reanimated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    moodValue: {
        textAlign: 'center',
        fontSize: 40,
        marginRight: 10,
    },
    moodDate: {
        textAlign: 'center',
        color: theme.colorLavender,
        fontFamily: theme.fontFamilyRegular
    },
    moodItem: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    moodDescription: {
        fontSize: 18,
        color: theme.colorPurple,
        fontFamily: theme.fontFamilyBold
    },
    iconAndDescription: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteText: {
        fontFamily: theme.fontFamilyBold,
        color: theme.colorBlue
    }
});
