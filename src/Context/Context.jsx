import { createContext, useState } from 'react'

export const CollectionsAppContext = createContext()

export const CollectionsAppProvider = ({children}) => {
    // Create collection state - Count
    const [count, setCount] = useState(0)
    
    // ShowDetail component - Open/Close
    const [isShowDetailOpen, setIsShowDetailOpen] = useState(false)

    const openShowDetail = () => {
        setIsShowDetailOpen(true)
    }

    const closeShowDetail = () => {
        setIsShowDetailOpen(false)
    }

    // ShowDetail component - Data
    const [dataToShow, setDataToShow] = useState({})

    return (
        <CollectionsAppContext.Provider value={{
            count,
            setCount,
            isShowDetailOpen,
            setIsShowDetailOpen,
            openShowDetail,
            closeShowDetail,
            dataToShow,
            setDataToShow
        }}>
            {children}
        </CollectionsAppContext.Provider>
    )
}