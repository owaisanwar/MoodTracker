import React, { createContext } from "react";
import { MoodOptionType, MoodOptionTypeWithDate } from "./types";

type AppContextType = {
    moodList: MoodOptionTypeWithDate[];
    handleSelectMood: (mood: MoodOptionType) => void
}

const AppContext = createContext<AppContextType>({
    moodList: [],
    handleSelectMood: () => { }
})

type AppProviderContext = {
    children: React.ReactNode
}
export const AppProvider: React.FC<AppProviderContext> = ({ children }) => {
    const [moodList, setMoodList] = React.useState<MoodOptionTypeWithDate[]>([])
    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [...current, { mood: selectedMood, date: Date.now() }])
    }, [])

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood }}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext)
