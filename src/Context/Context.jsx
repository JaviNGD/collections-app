import { createContext, useState } from 'react'

export const CollectionsAppContext = createContext()

export const CollectionsAppProvider = ({children}) => {

    // Total items collection cart - Count
    const [totalItems, setTotalItems] = useState(0)
    
    // ShowDetail component - Open/Close
    const [isShowDetailOpen, setIsShowDetailOpen] = useState(false)
    const openShowDetail = () => {setIsShowDetailOpen(true)}
    const closeShowDetail = () => {setIsShowDetailOpen(false)}

    // ShowDetail component - Data
    const [dataToShow, setDataToShow] = useState({})

    // Create collection state - open/close 'collection cart'
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(true)}
    const closeCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(false)}

    // Item detail - Show item detail
    const [itemToShow, setItemToShow] = useState({})

    // Collection cart - Add items to cart
    const [cartItems, setCartItems] = useState([])

    // Collection cart - Handle delete
    const deleteItem = (event, id) => {
        event.stopPropagation()
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
        totalItems > 0 ? setTotalItems(totalItems - 1) : null
    }

    return (
        <CollectionsAppContext.Provider value={{
            totalItems,
            setTotalItems,
            isShowDetailOpen,
            setIsShowDetailOpen,
            openShowDetail,
            closeShowDetail,
            dataToShow,
            setDataToShow,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            itemToShow,
            setItemToShow,
            cartItems,
            setCartItems,
            deleteItem
        }}>
            {children}
        </CollectionsAppContext.Provider>
    )
}