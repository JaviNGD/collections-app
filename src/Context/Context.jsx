import { createContext, useState } from 'react'

export const CollectionsAppContext = createContext()

export const CollectionsAppProvider = ({children}) => {
    const [count, setCount] = useState(0)

    return (
        <CollectionsAppContext.Provider value={{
        count,
        setCount
        }}>
        {children}
        </CollectionsAppContext.Provider>
    )
}