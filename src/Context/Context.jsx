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
    const toggleCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)}

    // Item detail - Show item detail
    const [itemToShow, setItemToShow] = useState({})

    // Collection cart - state
    const [cartItems, setCartItems] = useState([])

    // Collection cart - Add / Delete item from cart
    const toggleItemInCollection = (event, data) => {
        event.stopPropagation()
        const itemIndex = cartItems.findIndex(item => item.id === data.id);
        if (itemIndex !== -1) {
            // If the item is in the cart, then we remove it
            const newCartItems = cartItems.filter(item => item.id !== data.id);
            setCartItems(newCartItems);
            setTotalItems(totalItems - 1);
        } else {
            // Else we add it to the cart
            setCartItems([...cartItems, data]);
            setTotalItems(totalItems + 1);
            openCheckoutSideMenu();
        }
    };

    // Collection cart - Delete item from cart
    const deleteItem = (event, id) => {
        event.stopPropagation()
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
        totalItems > 0 ? setTotalItems(totalItems - 1) : null
    }

    // Collection cart - handle create collection

    // Collection cart - create collection
    const [collection, setCollection] = useState([])
    const [collectionName, setCollectionName] = useState('');

    // Collection cart - if collection name or cart is empty, alert user else create collection
    const handleClickCreate = () => {
        if (collectionName === '') {
            alert('Please enter a collection name')
        } else if (cartItems.length === 0) {
            alert('Please add items to the collection')
        } else {
            handleCreate(collectionName)
        }
    }

    const handleCreate = (collectionName) => {
        const collectionToAdd = {
            date: new Date().toLocaleDateString(),
            name: collectionName !== '' ? collectionName : 'Collection',
            items: cartItems,
            totalItems: totalItems
        }
        setCollection([...collection, collectionToAdd])
        closeCheckoutSideMenu()
        closeShowDetail()
        setCollectionName('')
        setCartItems([])
        setTotalItems(0)
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
            toggleCheckoutSideMenu,
            itemToShow,
            setItemToShow,
            cartItems,
            setCartItems,
            toggleItemInCollection,
            deleteItem,
            collection,
            setCollection,
            collectionName,
            setCollectionName,
            handleClickCreate,
            handleCreate
        }}>
            {children}
        </CollectionsAppContext.Provider>
    )
}