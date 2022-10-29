import React, { createContext } from "react";
import { MoodOptionType, MoodOptionTypeWithDate } from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
type AppContextType = {
    moodList: MoodOptionTypeWithDate[];
    handleSelectMood: (mood: MoodOptionType) => void;
    handleDeleteMood: (mood: MoodOptionTypeWithDate) => void;
}
type AppData = {
    moodList: MoodOptionTypeWithDate[]
}

const dataKey = 'my-app-data';

const setAppData = async (appData: AppData): Promise<void> => {
    try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(appData))
    } catch { }
}
const getAppData = async (): Promise<AppData | null> => {
    try {
        const result = await AsyncStorage.getItem(dataKey);
        if (result) {
            const appData: AppData = JSON.parse(result)
            return appData;
        }
    } catch (err) { }
    return null
}

const AppContext = createContext<AppContextType>({
    moodList: [],
    handleSelectMood: () => { },
    handleDeleteMood: () => { }
})

type AppProviderContext = {
    children: React.ReactNode
}
export const AppProvider: React.FC<AppProviderContext> = ({ children }) => {
    const [moodList, setMoodList] = React.useState<MoodOptionTypeWithDate[]>([])
    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => {
            const newMoodList = [...current, { mood: selectedMood, date: Date.now() }]
            setAppData({ moodList: newMoodList });
            return newMoodList
        })
    }, [])

    const handleDeleteMood = React.useCallback((mood: MoodOptionTypeWithDate) => {
        setMoodList(current => {
            const newMoodList = current.filter(val => val.date !== mood.date);

            setAppData({ moodList: newMoodList });

            return newMoodList;
        })
    }, [])

    React.useEffect(() => {
        const fetchAppData = async (): Promise<void> => {
            const data = await getAppData();
            if (data) {
                setMoodList(data.moodList);
            }
        }
        fetchAppData();
    }, [])

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood, handleDeleteMood }}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext)
